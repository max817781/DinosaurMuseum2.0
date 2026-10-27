const fs = require('fs');
const path = require('path');
const vm = require('vm');

const repoRoot = path.resolve(__dirname, '..');
const localSource = 'F:/恐龍諾諾實況vod/恐龍博物館/Codex/Code20260628/_deploy_DinosaurMuseum2.0_20260804/data/songData.js';
const liveSource = path.join(repoRoot, 'data', 'songData.js');
const outputPath = path.join(repoRoot, 'data', 'songReviewData.js');

function loadSongData(filePath) {
    const context = { window: { museumDataParts: {} } };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(filePath, 'utf8'), context, { filename: filePath });
    return context.window.museumDataParts.songData || [];
}

const overrides = {
    song_huai_nvhai: {
        siteDecision: 'owner',
        recommendation: 'ambiguous',
        evidence: '網路上有多首同名歌曲；常見候選包含 Ella 陳嘉樺與梅艷芳版本。沒有歌手或直播證據，不能直接判定。',
        sources: [
            ['Ella《壞女孩》資料', 'https://song.corp.com.tw/song.aspx?id=9324'],
            ['Ella EP 曲目資料', 'https://en.wikipedia.org/wiki/To_Be_Ella']
        ]
    },
    song_xiage_xingqi_qu_yingguo: {
        siteDecision: 'discard',
        recommendation: 'duplicate',
        evidence: '正式站已有同名歌曲，歌手為陳綺貞；這筆歌手空白，不應再新增。',
        correctedTitle: '下個星期去英國',
        correctedArtist: '陳綺貞'
    },
    song_yiqiannian_yihou: {
        siteDecision: 'discard',
        recommendation: 'exists',
        evidence: '可確認是林俊傑歌曲，但主人先前已要求先排除；是否為諾諾實際唱過仍需直播證據。',
        sources: [['《一千年以後》資料', 'https://zh.wikipedia.org/wiki/一千年以後']]
    },
    song_zuichu_mengxiang: {
        siteDecision: 'discard',
        recommendation: 'exists',
        evidence: '可確認是范瑋琪歌曲，但主人先前已要求先排除；是否為諾諾實際唱過仍需直播證據。',
        sources: [['福茂唱片官方 MV', 'https://www.youtube.com/watch?v=wGAmgmZg-48']]
    },
    song_count_on_me: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '可確認為 Bruno Mars《Count on Me》；仍缺諾諾演唱證據。',
        sources: [['Bruno Mars 官方藝人頻道', 'https://www.youtube.com/watch?v=VIHFZEYGA3g']]
    },
    song_bling_bling: {
        siteDecision: 'discard',
        recommendation: 'asr',
        evidence: '高度疑似把歌詞中的 Bling Bling 當成歌名；正式站已有很美味《不靈不靈》，而且目前已有兩筆重複。',
        correctedTitle: '不靈不靈',
        correctedArtist: '很美味',
        sources: [['《不靈不靈》線索', 'https://www.youtube.com/watch?v=aJkOr84oyJo']]
    },
    song_cup_song: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '一般所稱 Cup Song 多半是 Anna Kendrick《Cups (Pitch Perfect’s When I’m Gone)》；仍需確認諾諾唱的是哪個版本。',
        correctedTitle: 'Cups (Pitch Perfect’s When I’m Gone)',
        correctedArtist: 'Anna Kendrick',
        sources: [['《Cups》資料', 'https://en.wikipedia.org/wiki/Cups_(song)']]
    },
    song_zhi_xiaolongbao: {
        siteDecision: 'discard',
        recommendation: 'asr',
        evidence: '「至」為錯字；正式站已有諾諾原創曲《致小籠包》，不可重複新增。',
        correctedTitle: '致小籠包',
        correctedArtist: '小恐龍諾諾'
    },
    song_haiyou_ni: {
        siteDecision: 'discard',
        recommendation: 'asr',
        evidence: '主人已指出可能是《海底》；資料庫中另有羅之豪《海裡》且附伴奏／歌詞，原始「還有你」很可能是辨識錯誤。需回聽判定《海裡》或《海底》。',
        correctedTitle: '海裡／海底（待回聽）',
        correctedArtist: '羅之豪（若為《海裡》）'
    },
    song_honey: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '可確認郭書瑤有歌曲《Honey》；仍缺諾諾演唱證據。',
        sources: [
            ['Hit Fm 專輯資料', 'https://www.hitoradio.com/newweb/12122album'],
            ['郭書瑤官方藝人頻道', 'https://www.youtube.com/watch?v=iZdLgLqhEk8']
        ]
    },
    song_a_little_while: {
        siteDecision: 'owner',
        recommendation: 'ambiguous',
        evidence: '同名或近似歌名很多；搜尋可找到 Yellow Days《A Little While》及 U2《In a Little While》，沒有歌手／歌詞證據不能判定。',
        sources: [
            ['Yellow Days 官方藝人頻道', 'https://www.youtube.com/watch?v=7OopD1mdbL8'],
            ['U2 官方歌曲頁', 'https://www.u2.com/pages/song/in-a-little-while']
        ]
    },
    song_9420: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '可確認《9420》是麥小兜歌曲；主人先前表示不熟悉，是否為諾諾演唱仍需證據。',
        sources: [['LINE MUSIC 藝人／歌曲資料', 'https://music-tw.line.me/artist/190744']]
    },
    song_xingzuo: {
        siteDecision: 'owner',
        recommendation: 'ambiguous',
        evidence: '只有「星座」兩字且歌手空白，無法唯一對應歌曲；很可能是字幕截斷或辨識錯誤。'
    },
    song_liang_zhu: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '可確認《梁山伯與茱麗葉》由卓文萱與曹格合唱；仍缺諾諾演唱證據。',
        correctedArtist: '卓文萱＋曹格',
        sources: [['滾石發行資料', 'https://www.youtube.com/watch?v=jbnqa2P0bbs']]
    },
    song_haonanren: {
        siteDecision: 'owner',
        recommendation: 'asr',
        evidence: '本機脈絡指向《Plastic Memories》OP；「好男人」可能是語音辨識誤判，候選為佐佐木惠梨《Ring of Fortune》，必須回聽。',
        correctedTitle: 'Ring of Fortune（候選）',
        correctedArtist: '佐佐木惠梨（候選）',
        sources: [['動畫官方音樂頁', 'https://www.plastic-memories.jp/music/op.html']]
    },
    song_linyuyizhizou: {
        siteDecision: 'hold',
        recommendation: 'exists',
        evidence: '歌名可確認，但本機歌手「張紹涵」是錯字，正確為張韶涵；仍缺諾諾演唱證據。',
        correctedArtist: '張韶涵',
        sources: [['張韶涵官方 MV', 'https://www.youtube.com/watch?v=WTcodZDH-Oc']]
    }
};

const localSongs = loadSongData(localSource);
const liveSongs = loadSongData(liveSource);
const liveExact = new Map(liveSongs.map(song => [`${song.title}|||${song.artist}`, song]));
const liveByTitle = new Map();
for (const song of liveSongs) {
    if (!liveByTitle.has(song.title)) liveByTitle.set(song.title, []);
    liveByTitle.get(song.title).push(song);
}

const titleCount = new Map();
for (const song of localSongs) titleCount.set(song.title, (titleCount.get(song.title) || 0) + 1);

const songs = localSongs.map((song, index) => {
    const exact = liveExact.get(`${song.title}|||${song.artist}`) || null;
    const sameTitleOnline = (liveByTitle.get(song.title) || []).map(item => item.artist);
    const override = overrides[song.id] || {};
    const missingArtist = !String(song.artist || '').trim();
    const duplicateTitle = (titleCount.get(song.title) || 0) > 1;
    let recommendation = override.recommendation || (exact ? 'online' : 'review');
    const siteDecision = override.siteDecision || (exact ? 'published' : 'owner');
    let riskScore = 0;
    if (recommendation === 'asr') riskScore += 100;
    if (recommendation === 'ambiguous') riskScore += 85;
    if (recommendation === 'duplicate') riskScore += 80;
    if (missingArtist) riskScore += 45;
    if (!exact) riskScore += 30;
    if (duplicateTitle) riskScore += 25;
    if (exact && exact.status !== song.status) riskScore += 18;

    return {
        index: index + 1,
        id: song.id,
        title: song.title,
        artist: song.artist || '',
        language: song.language || '',
        localStatus: song.status || '',
        onlineStatus: exact ? (exact.status || '') : '',
        onlineExact: Boolean(exact),
        sameTitleOnlineArtists: sameTitleOnline,
        missingArtist,
        duplicateTitle,
        siteDecision,
        ownerReviewRequired: siteDecision === 'owner',
        recommendation,
        riskScore,
        evidence: override.evidence || (exact
            ? '正式歌聲收藏冊已有完全相同的歌名與歌手；這只能證明已收錄，仍可由主人重新判定來源是否可靠。'
            : '9/8 本機資料有此筆，但正式站沒有完全相同的歌名＋歌手，需要人工核對。'),
        correctedTitle: override.correctedTitle || '',
        correctedArtist: override.correctedArtist || '',
        sources: override.sources || [],
        originalLink: song.link || ''
    };
});

const payload = {
    generatedAt: '2026-10-27T13:30:00+08:00',
    localCount: localSongs.length,
    onlineCount: liveSongs.length,
    exactOnlineCount: songs.filter(song => song.onlineExact).length,
    siteHandledCount: songs.filter(song => song.siteDecision !== 'owner').length,
    ownerReviewCount: songs.filter(song => song.siteDecision === 'owner').length,
    reviewCount: songs.filter(song => !song.onlineExact || song.riskScore > 0).length,
    songs
};

fs.writeFileSync(
    outputPath,
    `// Generated by scripts/build-song-review-data.js\nwindow.songReviewData = ${JSON.stringify(payload, null, 2)};\n`,
    'utf8'
);

console.log(`Wrote ${songs.length} review records to ${outputPath}`);
