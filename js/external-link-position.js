(function () {
    const STORAGE_KEY = "museum-external-return-scroll-v1";
    const MAX_AGE_MS = 30 * 60 * 1000;
    let waitingForExternalReturn = false;
    let restoreInProgress = false;

    function getAnchorState() {
        const scrollY = Math.max(0, window.scrollY || 0);
        const sections = [...document.querySelectorAll("section[id]")];
        let anchor = null;

        sections.forEach(section => {
            const sectionTop = scrollY + section.getBoundingClientRect().top;
            if (sectionTop <= scrollY + 160) anchor = section;
        });

        if (!anchor) return { scrollY };
        const anchorTop = scrollY + anchor.getBoundingClientRect().top;
        return {
            scrollY,
            anchorId: anchor.id,
            anchorOffset: scrollY - anchorTop
        };
    }

    function savePosition() {
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
                path: window.location.pathname,
                savedAt: Date.now(),
                departed: false,
                ...getAnchorState()
            }));
            waitingForExternalReturn = true;
        } catch (error) {
            console.warn("無法暫存外部連結前的閱讀位置。", error);
        }
    }

    function clearSavedPosition() {
        waitingForExternalReturn = false;
        try {
            sessionStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.warn("無法清除外部連結閱讀位置。", error);
        }
    }

    function readSavedPosition() {
        try {
            const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
            if (!saved || saved.path !== window.location.pathname) return null;
            if (Date.now() - Number(saved.savedAt || 0) > MAX_AGE_MS) {
                clearSavedPosition();
                return null;
            }
            return saved;
        } catch (error) {
            clearSavedPosition();
            return null;
        }
    }

    function markPageDeparted() {
        if (!waitingForExternalReturn) return;
        const saved = readSavedPosition();
        if (!saved) return;
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...saved, departed: true }));
        } catch (error) {
            console.warn("無法更新外部連結返回狀態。", error);
        }
    }

    function restorePosition(saved) {
        const anchor = saved.anchorId ? document.getElementById(saved.anchorId) : null;
        const targetY = anchor
            ? window.scrollY + anchor.getBoundingClientRect().top + Number(saved.anchorOffset || 0)
            : Number(saved.scrollY || 0);
        window.scrollTo({ top: Math.max(0, targetY), left: 0, behavior: "auto" });
    }

    function restorePendingPosition() {
        if (restoreInProgress) return;
        const saved = readSavedPosition();
        if (!saved || !saved.departed) return;

        restoreInProgress = true;
        window.requestAnimationFrame(() => {
            restorePosition(saved);
            window.setTimeout(() => restorePosition(saved), 120);
            window.setTimeout(() => {
                restorePosition(saved);
                restoreInProgress = false;
                clearSavedPosition();
            }, 700);
        });
    }

    document.addEventListener("click", event => {
        const link = event.target.closest("a[href]");
        if (!link) return;

        const rawHref = link.getAttribute("href") || "";
        if (!rawHref || rawHref.startsWith("#")) return;

        let destination;
        try {
            destination = new URL(rawHref, window.location.href);
        } catch (error) {
            return;
        }

        if (!/^https?:$/.test(destination.protocol) || destination.origin === window.location.origin) return;

        savePosition();
        // 新分頁不一定會觸發原頁的 pagehide，先記成已離開，
        // 回到原分頁時可由 pageshow / visibilitychange / focus 復原。
        markPageDeparted();
        link.target = "_blank";
        link.relList.add("noopener", "noreferrer");

        window.setTimeout(() => {
            // 若彈窗被阻擋或原頁一直維持可見，就不需要保留暫存狀態。
            if (document.visibilityState === "visible" && document.hasFocus()) {
                clearSavedPosition();
            }
        }, 1500);
    }, true);

    window.addEventListener("pageshow", restorePendingPosition);

    window.addEventListener("pagehide", markPageDeparted);

    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState !== "visible" || !waitingForExternalReturn) return;
        window.setTimeout(restorePendingPosition, 80);
    });

    window.addEventListener("focus", () => {
        if (!waitingForExternalReturn) return;
        window.setTimeout(restorePendingPosition, 80);
    });
})();
