export enum Feed {
    '99_PERCENT_INVISIBLE' = '99_percent_invisible-general',
    AEON = 'aeon-general',
    AL_JAZEERA_ALL = 'al_jazeera-all',
    ATLAS_OBSCURA = 'atlas_obscura-general',
    BBC_TOP_STORIES = 'bbc-top_stories',
    BBC_WORLD = 'bbc-world',
    CNN_TOP_STORIES = 'cnn-top_stories',
    CNN_WORLD = 'cnn-world',
    DAMN_INTERESTING = 'damn_interesting-general',
    EL_PAIS_TOP_STORIES = 'el_pais-top_stories',
    FIVE_THIRTY_EIGHT = 'five_thirty_eight-general',
    FRANCE_24_WORLD = 'france_24-world',
    GUARDIAN_THE_LONG_READ = 'guardian-the_long_read',
    GUARDIAN_TOP_STORIES = 'guardian-top_stories',
    GUARDIAN_WORLD = 'guardian-world',
    JAPAN_TIMES_WORLD = 'japan_times-world',
    LONGREADS = 'longreads-general',
    NATIONAL_REVIEW_THE_CORNER = 'national_review-the_corner',
    NAUTILUS = 'nautilus-general',
    NEW_YORK_TIMES_TOP_STORIES = 'new_york_times-top_stories',
    NEW_YORK_TIMES_WORLD = 'new_york_times-world',
    NEW_YORKER_TOP_STORIES = 'new_yorker-top_stories',
    POLITICO_TOP_STORIES = 'politico-top_stories',
    QUILLETTE = 'quillette-general',
    REDDIT_FORMULA1_HOT = 'reddit_formula1-hot',
    REDDIT_NBA_HOT = 'reddit_nba-hot',
    REDDIT_NFL_HOT = 'reddit_nfl-hot',
    REDDIT_SOCCER_HOT = 'reddit_soccer-hot',
    REDDIT_TENNIS_HOT = 'reddit_tennis-hot',
    SYDNEY_MORNING_HERALD_WORLD = 'sydney_morning_herald-world',
    VOLOKH_CONSPIRACY = 'volokh-general',
    VOX = 'vox-general',
}

export const feedName: Record<Feed, string> = {
    [Feed['99_PERCENT_INVISIBLE']]: '99% Invisible',
    [Feed.AEON]: 'aeon',
    [Feed.AL_JAZEERA_ALL]: 'Al Jazeera',
    [Feed.ATLAS_OBSCURA]: 'Atlas Obscura',
    [Feed.BBC_TOP_STORIES]: 'BBC',
    [Feed.BBC_WORLD]: 'BBC',
    [Feed.CNN_TOP_STORIES]: 'CNN',
    [Feed.CNN_WORLD]: 'CNN',
    [Feed.DAMN_INTERESTING]: 'Damn Interesting',
    [Feed.EL_PAIS_TOP_STORIES]: 'El País',
    [Feed.FIVE_THIRTY_EIGHT]: 'FiveThirtyEight',
    [Feed.FRANCE_24_WORLD]: 'France 24',
    [Feed.GUARDIAN_THE_LONG_READ]: 'the Guardian',
    [Feed.GUARDIAN_TOP_STORIES]: 'the Guardian',
    [Feed.GUARDIAN_WORLD]: 'the Guardian',
    [Feed.JAPAN_TIMES_WORLD]: 'the Japan Times',
    [Feed.LONGREADS]: 'Longreads',
    [Feed.NATIONAL_REVIEW_THE_CORNER]: 'National Review',
    [Feed.NAUTILUS]: 'Nautilus',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]: 'the New York Times',
    [Feed.NEW_YORK_TIMES_WORLD]: 'the New York Times',
    [Feed.NEW_YORKER_TOP_STORIES]: 'the New Yorker',
    [Feed.POLITICO_TOP_STORIES]: 'Politico',
    [Feed.QUILLETTE]: 'Quillette',
    [Feed.REDDIT_FORMULA1_HOT]: 'r/Formula1',
    [Feed.REDDIT_NBA_HOT]: 'r/NBA',
    [Feed.REDDIT_NFL_HOT]: 'r/NFL',
    [Feed.REDDIT_SOCCER_HOT]: 'r/soccer',
    [Feed.REDDIT_TENNIS_HOT]: 'r/tennis',
    [Feed.SYDNEY_MORNING_HERALD_WORLD]: 'the Sydney Morning Herald',
    [Feed.VOLOKH_CONSPIRACY]: 'Volokh Conspiracy',
    [Feed.VOX]: 'Vox',
};

export const feedPath: Record<string, Feed[]> = {
    home: [Feed.BBC_WORLD, Feed.GUARDIAN_WORLD, Feed.NEW_YORK_TIMES_WORLD],
    long: [
        Feed.AEON,
        Feed.DAMN_INTERESTING,
        Feed.GUARDIAN_THE_LONG_READ,
        Feed.LONGREADS,
        Feed.NAUTILUS,
        Feed.QUILLETTE,
    ],
    ricky: [Feed.EL_PAIS_TOP_STORIES],
    sat: [
        Feed.AL_JAZEERA_ALL,
        Feed.BBC_WORLD,
        Feed.FIVE_THIRTY_EIGHT,
        Feed.FRANCE_24_WORLD,
        Feed.JAPAN_TIMES_WORLD,
        Feed.NEW_YORK_TIMES_WORLD,
        Feed.SYDNEY_MORNING_HERALD_WORLD,
        Feed.VOLOKH_CONSPIRACY,
    ],
    sport: [
        Feed.REDDIT_FORMULA1_HOT,
        Feed.REDDIT_NBA_HOT,
        Feed.REDDIT_NFL_HOT,
        Feed.REDDIT_TENNIS_HOT,
        Feed.REDDIT_SOCCER_HOT,
    ],
};

export const feedURL: Record<Feed, string> = {
    [Feed['99_PERCENT_INVISIBLE']]: 'http://feeds.feedburner.com/99pi',
    [Feed.AEON]: 'https://aeon.co/feed.rss',
    [Feed.AL_JAZEERA_ALL]: 'https://www.aljazeera.com/xml/rss/all.xml',
    [Feed.ATLAS_OBSCURA]: 'https://www.atlasobscura.com/feeds/latest',
    [Feed.BBC_TOP_STORIES]: 'https://feeds.bbci.co.uk/news/rss.xml',
    [Feed.BBC_WORLD]: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    [Feed.CNN_TOP_STORIES]: 'http://rss.cnn.com/rss/cnn_topstories.rss',
    [Feed.CNN_WORLD]: 'http://rss.cnn.com/rss/cnn_world.rss',
    [Feed.EL_PAIS_TOP_STORIES]:
        'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada',
    [Feed.FIVE_THIRTY_EIGHT]: 'https://fivethirtyeight.com/features/feed/',
    [Feed.FRANCE_24_WORLD]: 'https://www.france24.com/en/rss',
    [Feed.DAMN_INTERESTING]: 'https://feeds.feedburner.com/damninteresting/all',
    [Feed.GUARDIAN_THE_LONG_READ]:
        'https://www.theguardian.com/news/series/the-long-read/rss',
    [Feed.GUARDIAN_TOP_STORIES]:
        'https://www.theguardian.com/international/rss',
    [Feed.GUARDIAN_WORLD]: 'https://www.theguardian.com/world/rss',
    [Feed.JAPAN_TIMES_WORLD]:
        'https://www.japantimes.co.jp/news_category/world/feed/',
    [Feed.LONGREADS]: 'https://longreads.com/feed/',
    [Feed.NATIONAL_REVIEW_THE_CORNER]:
        'https://www.nationalreview.com/corner/feed/',
    [Feed.NAUTILUS]: 'https://nautil.us/feed/',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]:
        'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    [Feed.NEW_YORK_TIMES_WORLD]:
        'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
    [Feed.NEW_YORKER_TOP_STORIES]: 'https://www.newyorker.com/feed/news',
    [Feed.POLITICO_TOP_STORIES]: 'https://rss.politico.com/politics-news.xml',
    [Feed.QUILLETTE]: 'https://quillette.com/articles/rss/',
    [Feed.REDDIT_NBA_HOT]: 'https://www.reddit.com/r/nba/hot.json?limit=10',
    [Feed.REDDIT_FORMULA1_HOT]:
        'https://www.reddit.com/r/formula1/hot.json?limit=5',
    [Feed.REDDIT_NFL_HOT]: 'https://www.reddit.com/r/nfl/hot.json?limit=10',
    [Feed.REDDIT_SOCCER_HOT]:
        'https://www.reddit.com/r/soccer/hot.json?limit=10',
    [Feed.REDDIT_TENNIS_HOT]:
        'https://www.reddit.com/r/tennis/hot.json?limit=5',
    [Feed.SYDNEY_MORNING_HERALD_WORLD]: 'https://www.smh.com.au/rss/world.xml',
    [Feed.VOLOKH_CONSPIRACY]: 'https://reason.com/volokh/feed/',
    [Feed.VOX]: 'https://www.vox.com/rss/index.xml',
};
