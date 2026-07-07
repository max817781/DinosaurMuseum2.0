// ??????
// ???????? data/ ???????????????? window.museumData?
(function () {
    const parts = window.museumDataParts || {};

    window.museumData = {
        contentMap: parts.contentMap || {},
        heroData: parts.heroData || [],
        vodData: parts.vodData || [],
        songData: parts.songData || [],
        marshmallowData: parts.marshmallowData || [],
        marshmallowInfo: parts.marshmallowInfo || {},
        timelineData: parts.timelineData || [],
        originalSong: parts.originalSong || {},
        originalSongs: parts.originalSongs || [],
        quoteData: parts.quoteData || [],
        annualReview: parts.annualReview || {}
    };
})();
