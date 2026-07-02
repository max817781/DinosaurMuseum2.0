/*
 * 恐龍諾諾博物館｜共用資料檔
 *
 * 維護原則：
 * 1. 新增 VOD 時，只在 vodData 寫一次。
 * 2. 新增歌曲時，只在 songData 寫一次。
 * 3. heroData 是人工策展區；只有放進這裡的內容才會出現在首頁輪播。
 * 4. contentMap 只保存時間軸、語錄等其他共用內容。
 */
const playgroundLinks = [
    {
        title: "半周年 MOD 爭權大賽",
        desc: "Kahoot 回放挑戰",
        url: "https://max817781.github.io/mod-battle-/",
        external: false
    }
];

window.museumData = {
    contentMap: {
        original_rawr_rawr: {
            type: "originalSong",
            title: "RawrRawr",
            date: "2026.03.28",
            youtube: "https://www.youtube.com/watch?v=SOYVnvJXcq4&list=RDSOYVnvJXcq4&start_radio=1",
            image: ""
        },
		//原創曲展區
        original_dear_dumplings: {
            type: "originalSong",
            title: "致小龍包",
            englishTitle: "Dear Soup Dumplings",
            date: "2026.05.30",
            desc: "一封寫給小龍包們的信。這不只是原創歌曲，也是 YanYan 與大家共同走過一段時間的證明。",
            youtube: "https://youtu.be/vsmhL5o-kvo?si=-ep-zsgPCVpY29h3",
            xLink: "https://x.com/LittleDinoYan/status/2060945997682131069",
            image: "",
            credits: [
                "Vocal & Melody：YanYan",
                "Lyrics：YanYan",
                "Music & Vocal Mixing：ProdbyTaka",
                "MV Art：mhs鈴黔",
                "MV Production：YanYan"
            ]
        },
		original_second_song: {
			type: "originalSong",
			title: "第二首歌名",
			englishTitle: "Second Original Song",
			date: "2026.XX.XX",
			desc: "這裡寫第二首原創歌的介紹。",
			youtube: "YouTube連結",
			xLink: "X貼文連結",
			image: "images/original_song_02.jpg",
			icon: "🎵🦖",
			credits: [
				"Vocal：YanYan",
				"Lyrics：YanYan",
				"Music：填寫製作人"
            ]
        },
		
        profile_yanyan: {
            type: "profile",
            title: "YanYan 的自我介紹",
            text: "Rawr Rawr!!! I’m just an ordinary girl who LOVES her little dinosaur.",
            link: "https://x.com/LittleDinoYan",
            audio: "images/rawr.mp3",
            image: ""
        },
        quote_not_goblin: {
            type: "quote",
            title: "恐龍語錄",
            text: "不是哥布林，是恐龍。這件事非常重要。",
            link: "",
            audio: "",
            image: ""
        },
        quote_southern_zongzi: {
            type: "quote",
            title: "2026 端午粽子之戰",
            text: "南部粽才是最賀甲的…！！！而且一定要鹹粽！！",
            link: "https://x.com/LittleDinoYan/status/2067829682742202618",
            audio: "",
            image: "images/粽子投票.jpg"
        }
    },

    // 人工策展區：想放上首頁輪播時，才把 sourceId 加進來。
    heroData: [
        {
            sourceId: "song_baobei",
            tag: "歌聲收藏",
            desc: "給你一點甜甜，讓你今夜都好眠✨",
            meta: "歌回紀錄"
        },
        {
            sourceId: "song_buling_buling",
            tag: "歌聲收藏",
            desc: "把那一天的笑容和歌聲一起留下來。",
            meta: "歌回紀錄"
        },
        {
            sourceId: "song_occupy_you",
            tag: "歌聲收藏",
            desc: "一首歌，也是一段被收藏的心情。",
            meta: "歌回紀錄"
        }
    ],

    vodData: [
        {
            id: "vod_valo_princess_1v3",
            type: "vod",
            title: "【瓦羅然】瓦瓦小公主1V3",
            link: "https://discord.com/channels/1437520274659479625/1438430166773792858/1476758590365765777",
            image: "",
            category: "遊戲",
            emoji: "🎮",
            story: "一場值得回頭再看的遊戲時刻。"
        },
        {
            id: "vod_cheer_chen_multitask",
            type: "vod",
            title: "【歌回】陳綺貞｜一心多用的 YanYan ♫",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1517492901792186439",
            image: "",
            category: "唱歌",
            emoji: "🎤",
            story: "只有陳綺貞，才能一心多用。"
        },
        {
            id: "vod_half_anniversary_qa",
            type: "vod",
            title: "【🎊 半週年慶祝】溫暖社群棉花台 Q&A 環節 #01",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1505946351383478292",
            image: "",
            category: "活動",
            emoji: "💬",
            story: "和小龍包們一起度過的紀念日。"
        },
		{
            id: "vod_The_Young_Lady_and_the_Gentle_Dinosaur_2.0",
            type: "vod",
            title: "大小姐與溫柔小恐龍2.0",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1510212575953162352",
            image: "",
            category: "精華",
            emoji: "💬",
            story: " 大小姐與溫柔小恐龍2.0的第一次相遇",
			tags:"小恐龍2.0,小劇場,關關的心"
        },
		{
            id: "A_Flash_of_Green_Light!!_The_Goblin_Idol..._Rallying_the_Army_Again?",
            type: "vod",
            title: "眼前一道綠光!!哥布林偶像...再現集結大軍?",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1502341152836161627",
            image: "",
            category: "精華",
            emoji: "",
            story: " 哥布林偶像再次來襲!!",
			tags:"哥布林偶像"
        },
		{
    "id": "",
    "type": "vod",
    "title": "Blue - yung kai",
    "link": "https://discord.com/channels/1437520274659479625/1473967136908251321/1502311174665011200",
    "image": "",
    "category": "唱歌",
    "emoji": "🎤",
    "story": "",
    "tags": ""
},
{
    "id": "",
    "type": "vod",
    "title": "從地下偶像到地下室摔角：諾諾的物理性出道！",
    "link": "https://discord.com/channels/1437520274659479625/1473967136908251321/1498970969463718000",
    "image": "",
    "category": "其他",
    "emoji": "🦖",
    "story": "",
    "tags": ""
},
{
    "id": "",
    "type": "vod",
    "title": "陳綺貞 Cheer Chen【太多 Too Much】",
    "link": "https://discord.com/channels/1437520274659479625/1473967136908251321/1498679825941135370",
    "image": "",
    "category": "唱歌",
    "emoji": "🎤",
    "story": "",
    "tags": ""
}
		
    ],

    songData: [
        {
            id: "song_baobei",
            type: "song",
            title: "寶貝",
            artist: "張懸",
            language: "中文",
            status: "已唱",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1515228468105969814",
            image: "images/my_cover_01.jpg"
        },
        {
            id: "song_xihuan",
            type: "song",
            title: "喜歡",
            artist: "張懸",
            language: "中文",
            status: "待練",
            link: "",
            image: ""
        },
        {
            id: "song_buling_buling",
            type: "song",
            title: "不靈不靈",
            artist: "很美味",
            language: "中文",
            status: "已唱",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1515665102961905764",
            image: "images/my_cover_02.jpg"
        },
        {
            id: "song_occupy_you",
            type: "song",
            title: "我想要佔據你",
            artist: "告五人",
            language: "中文",
            status: "已唱",
            link: "https://discord.com/channels/1437520274659479625/1473967136908251321/1516778060677124106",
            image: "images/my_cover_03.jpg"
        },
        {
            id: "song_first_love",
            type: "song",
            title: "First Love",
            artist: "宇多田光",
            language: "日文",
            status: "待練",
            link: "",
            image: ""
        },
        {
            id: "song_automatic",
            type: "song",
            title: "Automatic",
            artist: "宇多田光",
            language: "日文",
            status: "待練",
            link: "",
            image: ""
        },
        {
            id: "song_flavor_of_life",
            type: "song",
            title: "Flavor Of Life",
            artist: "宇多田光",
            language: "日文",
            status: "待練",
            link: "",
            image: ""
        },
        {
            id: "song_thousand_years",
            type: "song",
            title: "A Thousand Years",
            artist: "Christina Perri",
            language: "英文",
            status: "已唱",
            link: "",
            image: ""
        }
    ],

    // 半周年棉花糖回憶：只收錄直播中已公開讀出的內容，由館長手動整理。
    marshmallowData: [
       {
            id: "mash_001",
            title: "半周年棉花糖 #01",
            preview: "🎊諾諾半周年快樂🎊...",
            text: "🎊諾諾半周年快樂🎊\n\n諾諾樂觀開朗、認真努力、可愛又風趣，唱歌也\n很厲害，很舒服很好聽。\n\n每次看到諾諾都覺得很開心，感覺整個人都被治\n癒了，是超級治癒系🦖，真的超喜歡諾諾(*๓\n´ ╰╯ `๓)❤️\n\n也要記得好好休息，不要讓自己太累，甘巴\n爹！！你是最棒的👍",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_002",
            title: "半周年棉花糖 #02",
            preview: "好懶，恭喜小恐龍，但……好懶",
            text: "好懶，恭喜小恐龍，但……好懶",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
		{
            id: "mash_003",
            title: "半周年棉花糖 #03",
            preview: "諾諾我喜歡你阿阿阿阿！！！",
            text: "諾諾我喜歡你阿阿阿阿！！！\n肌肉阿諾.jpg",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_004",
            title: "半周年棉花糖 #04",
            preview: "主播您好！半週年快樂（煙火）...",
            text: "主播您好！半週年快樂（煙火）\n覺得從開播到今天，最多收穫的是什麼，謝謝～",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_005",
            title: "半周年棉花糖 #05",
            preview: "我只想知道哈橘是不是AI認定的...",
            text: "我只想知道哈橘是不是AI認定的不雅文字 下面一位～",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_006",
            title: "半周年棉花糖 #06",
            preview: "小恐龍諾諾是一位成熟婉約氣質動人...",
            text: "小恐龍諾諾是一位\n成熟婉約氣質動人魅力無敵溫柔穩重的恐龍偶像大姐姐\n身為一位成熟婉約氣質動人魅力無敵溫柔穩重的恐龍偶像大姐姐的忠實信徒\n我備感榮幸",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_007",
            title: "半周年棉花糖 #07",
            preview: "恐龍是在什麼契機下開始當V的...",
            text: "恐龍是在什麼契機下開始當V的，恐龍這個人設是怎麼來的，還有「哈局！」是怎麼來的。◕_◕。",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_008",
            title: "半周年棉花糖 #08",
            preview: "諾諾我愛你",
            text: "諾諾我愛你",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
       {
            id: "mash_009",
            title: "半周年棉花糖 #09",
            preview: "祝諾諾半周年快樂!!感覺小諾諾身上有...",
            text: "祝諾諾半周年快樂!!感覺小諾諾身上有源源不絕地能量，每次來直播間都好療癒心情，好有活力可愛的一條小恐龍妹妹呀>u< 諾諾也要天天開心~然後要照顧好身體!! 諾諾是最棒的喔❤️",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_010",
            title: "半周年棉花糖 #10",
            preview: "主包你好，我第一次来，请问你是...",
            text: "主包你好，我第一次来，请问你是鳄鱼吗？",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_011",
            title: "半周年棉花糖 #11",
            preview: "Chicken Nuggets!!!",
            text: "Chicken Nuggets!!!",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
        {
            id: "mash_012",
            title: "半周年棉花糖 #12",
            preview: "狂！賀！小恐龍諾諾半週年快樂🎉...",
            text: "狂！賀！小恐龍諾諾半週年快樂🎉\n在這些說長不長說短不短的日子了\n已見識到小恐龍多種型態\n想當然每個都喜歡(黑玫瑰大好😆\n但最愛的還是小恐龍的歌聲啦\n雖然時間上較難跟台\n但還是會支持小恐龍的！\nGood for you 👍",
            date: "2026.05.17",
            note: "半周年活動公開朗讀"
        },
		{
		    id: "mash_013",
		    title: "半周年棉花糖 #13",
		    preview: "雖然剛認識諾諾 但是我每次都在期待...",
		    text: "雖然剛認識諾諾 但是我每次都在期待諾諾開台\n來到諾諾的台發現好多歡樂 好快樂\n沒有諾諾的一個月 好想諾諾",
		    date: "2026.05.17",
		    note: "半周年活動公開朗讀"
		}
		
    ],

    marshmallowInfo: {
        title: "半周年棉花糖活動",
        link: "#",
        buttonText: "查看當時活動棉花糖"
    },

    timelineData: [
        {
            sourceId: "profile_yanyan",
            date: "2025.10",
            label: "最初的足跡",
            displayTitle: "小恐龍開始留下故事",
            desc: "@LittleDinoYan 的個人頁在這個月加入 X。這裡把它視為時間軸上第一枚溫柔的腳印。",
            icon: "🦖"
        },
        {
            date: "2025.11.11",
            label: "活動開始",
            title: "恐龍突然出現，開始活動",
            desc: "從這一天開始，YanYan 的故事正式出現在大家面前。這裡可以視為博物館時間軸真正開幕的第一天。",
            icon: "🦖",
            link: ""
        },
        {
            date: "2026.01.07",
            label: "小龍包集結",
            title: "集結 100 萬顆小龍包",
            desc: "第一個被放上時間軸的集結節點。數字不只是數字，也是有人開始陪著小恐龍往前走的證明。",
            icon: "🥟",
            link: ""
        },
        {
            date: "2026.01.19",
            label: "重要配信",
            title: "初二配信",
            desc: "值得被放進成長時間軸的一次重要配信。",
            icon: "🌱",
            link: ""
        },
        {
            date: "2026.02.07",
            label: "小龍包集結",
            title: "集結 200 萬顆小龍包",
            desc: "越來越多小龍包聚在一起，讓這段旅程開始有了更清楚的輪廓。",
            icon: "🥟",
            link: ""
        },
        {
            date: "2026.02.25",
            label: "小龍包集結",
            title: "集結 300 萬顆小龍包",
            desc: "又一個值得被收藏的成長刻度。未來回頭看時，會知道這裡也有人一起走過。",
            icon: "🥟",
            link: ""
        },
        {
            sourceId: "original_rawr_rawr",
            label: "第一首原創曲",
            titleSuffix: "公開!! [點擊播放]",
            desc: "YanYan 的第一首原創曲。",
            icon: "🎵"
        },
        {
            date: "2026.04.15",
            label: "小龍包集結",
            title: "集結 400 萬顆小龍包",
            desc: "小龍包的隊伍繼續長大，陪伴也慢慢變成可以被看見的足跡。",
            icon: "🥟",
            link: ""
        },
        {
            date: "2026.05.26",
            label: "小龍包集結",
            title: "集結 500 萬顆小龍包",
            desc: "從 100 萬到 500 萬，這是一段很適合放進博物館裡的成長曲線。",
            icon: "🥟",
            link: ""
        },
        {
            sourceId: "original_dear_dumplings",
            label: "原創歌曲",
            titlePrefix: "努力自己寫出了",
            titleSuffix: "~~ [點擊播放]",
            desc: "這是一封寫給小龍包們的歌聲信件。比起單純的作品發布，更像是 YanYan 把一段陪伴認真收進歌裡。",
            icon: "✉️"
        },
        {
            date: "2026.06",
            label: "數位回憶館",
            title: "恐龍諾諾博物館開始整理",
            desc: "散落在 Discord、X 與直播裡的歌聲、故事和名場面，開始有了一個能長久停留的地方。",
            icon: "🌱",
            link: ""
        }
    ],

    originalSong: {
        sourceId: "original_dear_dumplings"
    },
	originalSongs: [
		{ sourceId: "original_dear_dumplings" },
		{ sourceId: "original_second_song" }
	],
	
    quoteData: [
        { sourceId: "profile_yanyan", icon: "🦖" },
        { sourceId: "quote_not_goblin", icon: "🌱" },
        { sourceId: "quote_southern_zongzi", icon: "🔥" }
    ],

    annualReview: {
        year: "2026",
        title: "仍在書寫的小恐龍故事",
        desc: "這一年還沒有結束。原創歌曲、歌回、遊戲和與小龍包們相遇的時刻，會繼續在這裡慢慢長成一條路。"
    }
};
