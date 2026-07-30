// 彩蛋與集章卡資料
// 未來新增彩蛋時，可在 eggs 陣列加入新的物件。
window.museumDataParts = window.museumDataParts || {};
window.museumDataParts.easterEggData = {
    storageKey: "nonoMuseumUnlockedEasterEggs",
    passport: {
        kicker: "Dinosaur Museum Secret Passport",
        title: "彩蛋集章卡",
        intro: "你在博物館裡找到了一個藏起來的小秘密。每次發現彩蛋，這張卡就會留下新的足跡。",
        storedMessage: "已收進右下角的小恐龍導覽員 🦖"
    },
    eggs: [
        {
            id: "outfit-memory-wall",
            triggerClicks: 3,
            stampTitle: "衣裝回憶牆",
            stampDesc: "在首頁找到藏在小恐龍頭上的機關，解鎖四張衣裝拍立得。",
            unlockBubble: "找到衣裝回憶牆了！🦖",
            cards: [
                {
                    name: "哥布林諾諾",
                    image: "images/哥布林初登場.jpg",
                    date: "2026/01/19",
                    dateTime: "2026-01-19",
                    desc: "一起回山洞！"
                },
                {
                    name: "黑玫瑰諾諾",
                    image: "images/黑玫瑰初登場.jpg",
                    date: "2026/04/02",
                    dateTime: "2026-04-02",
                    desc: "黑玫瑰：我不會再笑的！"
                },
                {
                    name: "工地小公主",
                    backTitle: "天使",
                    image: "images/工地小公主.jpg",
                    date: "2026/03/21",
                    dateTime: "2026-03-21",
                    desc: "正港工地小公主"
                },
                {
                    name: "半周年新衣裝",
                    image: "images/半周年新衣裝初登場.jpg",
                    date: "2026/05/17",
                    dateTime: "2026-05-17",
                    desc: "半周年新衣裝閃亮登場"
                }
            ]
        },
        {
            id: "draw-and-guess",
            triggerClicks: 3,
            stampTitle: "妳畫我猜",
            stampDesc: "在自我介紹裡連點小恐龍三次，替牠戴上諾諾風格的眼罩。",
            unlockBubble: "妳畫我猜！小恐龍戴上眼罩了！🦖"
        },
        {
            id: "tft-princess",
            triggerClicks: 3,
            stampTitle: "TFT小公主",
            stampDesc: "連續抽三張回憶卡，召喚由下往上出現的 TFT 衣裝商店。",
            unlockBubble: "TFT 小公主商店出現了！⭐⭐⭐",
            shopTitle: "TFT小公主",
            shopSubtitle: "本回合 TFT 衣裝商店",
            upgradeSound: "media/tft-five-star-upgrade.mp3",
            drawCount: 5,
            cards: [
                { name: "工地小公主", image: "images/工地小公主.jpg", cost: 2 },
                { name: "黑玫瑰諾諾", image: "images/黑玫瑰初登場.jpg", cost: 3 },
                { name: "哥布林諾諾", image: "images/哥布林初登場.jpg", cost: 1 },
                { name: "半周年新衣裝", image: "images/半周年新衣裝初登場.jpg", cost: 5 }
            ]
        },
        {
            id: "harju-scolding",
            triggerSourceId: "mash_005",
            stampTitle: "哈橘！嚴厲斥責！",
            stampDesc: "打開半周年棉花糖 #05，撐過滿畫面的橘子，再由中央拳頭全部打散。",
            unlockBubble: "哈橘！嚴厲斥責！🍊👊",
            replayLabel: "再看一次哈橘彩蛋"
        },
        {
            id: "tft-graduation",
            stampTitle: "TFT畢業證書",
            stampDesc: "在TFT小公主商店中，成功收集 9 張【半周年新衣裝(5費)】合成三星即可獲得。",
            unlockBubble: "恭喜畢業！⭐⭐⭐"
        },
        {
            id: "kirisame-rain",
            triggerSourceId: "Forest_of_Drizzling_Rain_Chapter_1",
            type: "favorite",
            stampTitle: "綿綿細雨",
            stampDesc: "為霧雨飄散之森按下了收藏，卻迎來了一場不會停止的細雨。",
            unlockBubble: "下雨了... 躲進山洞裡吧。🌧️",
            animationType: "rain"
        },
        {
            id: "nono-audio-egg",
            stampTitle: "耳膜修養",
            stampDesc: "播放了諾諾的魔音傳腦，您的耳膜似乎又強壯了一些。",
            unlockBubble: "Rawr！是不是很大聲！📢"
        }
    ]
};
