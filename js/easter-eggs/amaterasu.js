(() => {
    "use strict";

    const EGG_ID = "amaterasu-nono";
    const DEFAULT_TEXT = "“不是哥布林，是恐龍。這件事非常重要”";
    const eggData = window.museumDataParts?.easterEggData?.eggs?.find((egg) => egg.id === EGG_ID) || {};
    const triggerClicks = Number(eggData.triggerClicks) || 3;
    const tapResetMs = Number(eggData.tapResetMs) || 2000;
    const popoutMs = Number(eggData.popoutMs) || 3000;
    const restoreMs = Math.max(Number(eggData.restoreMs) || 4500, popoutMs);

    const hotspot = document.getElementById("amaterasuHotspot");
    const overlay = document.getElementById("amaterasuOverlay");
    const popout = document.getElementById("amaterasuPopout");
    const text = document.getElementById("amaterasuText");
    const bubble = document.querySelector(".nono-bubble");
    const imageContainer = document.querySelector(".amaterasu-image-container");

    if (!hotspot || !overlay || !popout) return;

    let tapCount = 0;
    let tapTimer = 0;
    let vanishTimer = 0;
    let restoreTimer = 0;
    let passportTimer = 0;
    let isActive = false;

    function setEffectVisibility(visible) {
        overlay.setAttribute("aria-hidden", String(!visible));
        popout.setAttribute("aria-hidden", String(!visible));
    }

    function clearEffectTimers() {
        window.clearTimeout(vanishTimer);
        window.clearTimeout(restoreTimer);
        window.clearTimeout(passportTimer);
    }

    function unlockEgg() {
        if (typeof hasUnlockedEasterEgg !== "function" || hasUnlockedEasterEgg(EGG_ID)) return;

        const unlockedEggs = typeof getUnlockedEasterEggs === "function" ? getUnlockedEasterEggs() : [];
        if (!unlockedEggs.includes(EGG_ID)) unlockedEggs.push(EGG_ID);
        if (typeof saveUnlockedEasterEggs === "function") saveUnlockedEasterEggs(unlockedEggs);

        if (typeof showNonoPetBubble === "function") {
            showNonoPetBubble(`解鎖成就：${eggData.stampTitle || "阿嬤特拉斯！"}🔥👁️`);
        }

        const stampMenuButton = document.getElementById("easterEggStampMenuBtn");
        if (stampMenuButton) {
            passportTimer = window.setTimeout(() => stampMenuButton.click(), 1000);
        }
    }

    function restoreEffect({ unlock = true } = {}) {
        clearEffectTimers();
        isActive = false;
        overlay.classList.remove("is-active");
        popout.classList.remove("is-active", "is-vanishing");
        bubble?.classList.remove("is-active");
        imageContainer?.classList.remove("is-active");
        setEffectVisibility(false);
        if (text) text.textContent = DEFAULT_TEXT;
        if (unlock) unlockEgg();
    }

    function triggerEffect() {
        if (isActive) return;
        isActive = true;
        clearEffectTimers();
        setEffectVisibility(true);
        overlay.classList.add("is-active");
        popout.classList.remove("is-vanishing");
        popout.classList.add("is-active");
        bubble?.classList.add("is-active");
        imageContainer?.classList.add("is-active");
        if (text) text.textContent = eggData.unlockBubble || "阿嬤特拉斯！🔥👁️";

        vanishTimer = window.setTimeout(() => {
            popout.classList.remove("is-active");
            popout.classList.add("is-vanishing");
        }, popoutMs);

        restoreTimer = window.setTimeout(() => restoreEffect(), restoreMs);
    }

    function handleTap() {
        if (isActive) return;
        tapCount += 1;
        window.clearTimeout(tapTimer);

        if (tapCount >= triggerClicks) {
            tapCount = 0;
            triggerEffect();
            return;
        }

        tapTimer = window.setTimeout(() => {
            tapCount = 0;
        }, tapResetMs);
    }

    hotspot.addEventListener("click", handleTap);
    window.addEventListener("pagehide", () => {
        window.clearTimeout(tapTimer);
        restoreEffect({ unlock: false });
    }, { once: true });
})();
