export enum Feed {
    '99_PERCENT_INVISIBLE' = '99_percent_invisible-general',
    AEON = 'aeon-general',
    ATLAS_OBSCURA = 'atlas_obscura-general',
    BBC_TOP_STORIES = 'bbc-top_stories',
    BBC_WORLD = 'bbc-world',
    CNN_TOP_STORIES = 'cnn-top_stories',
    CNN_WORLD = 'cnn-world',
    DAMN_INTERESTING = 'damn_interesting-general',
    EL_PAIS_TOP_STORIES = 'el_pais-top_stories',
    FIVE_THIRTY_EIGHT = 'five_thirty_eight-general',
    GUARDIAN_TOP_STORIES = 'guardian-top_stories',
    GUARDIAN_WORLD = 'guardian-world',
    NATIONAL_REVIEW_THE_CORNER = 'national_review-the_corner',
    NEW_YORK_TIMES_TOP_STORIES = 'new_york_times-top_stories',
    NEW_YORK_TIMES_WORLD = 'new_york_times-world',
    NEW_YORKER_TOP_STORIES = 'new_yorker-top_stories',
    POLITICO_TOP_STORIES = 'politico-top_stories',
    REDDIT_FORMULA1_HOT = 'reddit_formula1-hot',
    REDDIT_NBA_HOT = 'reddit_nba-hot',
    REDDIT_NFL_HOT = 'reddit_nfl-hot',
    REDDIT_SOCCER_HOT = 'reddit_soccer-hot',
    REDDIT_TENNIS_HOT = 'reddit_tennis-hot',
    VOLOKH_CONSPIRACY = 'volokh-general',
    VOX = 'vox-general',
}

export const FeedName: Record<Feed, string> = {
    [Feed['99_PERCENT_INVISIBLE']]: '99% Invisible',
    [Feed.AEON]: 'aeon',
    [Feed.ATLAS_OBSCURA]: 'Atlas Obscura',
    [Feed.BBC_TOP_STORIES]: 'BBC',
    [Feed.BBC_WORLD]: 'BBC',
    [Feed.CNN_TOP_STORIES]: 'CNN',
    [Feed.CNN_WORLD]: 'CNN',
    [Feed.DAMN_INTERESTING]: 'Damn Interesting',
    [Feed.EL_PAIS_TOP_STORIES]: 'El País',
    [Feed.FIVE_THIRTY_EIGHT]: 'FiveThirtyEight',
    [Feed.GUARDIAN_TOP_STORIES]: 'the Guardian',
    [Feed.GUARDIAN_WORLD]: 'the Guardian',
    [Feed.NATIONAL_REVIEW_THE_CORNER]: 'National Review',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]: 'the New York Times',
    [Feed.NEW_YORK_TIMES_WORLD]: 'the New York Times',
    [Feed.NEW_YORKER_TOP_STORIES]: 'the New Yorker',
    [Feed.POLITICO_TOP_STORIES]: 'Politico',
    [Feed.REDDIT_FORMULA1_HOT]: 'r/Formula1',
    [Feed.REDDIT_NBA_HOT]: 'r/NBA',
    [Feed.REDDIT_NFL_HOT]: 'r/NFL',
    [Feed.REDDIT_SOCCER_HOT]: 'r/soccer',
    [Feed.REDDIT_TENNIS_HOT]: 'r/tennis',
    [Feed.VOLOKH_CONSPIRACY]: 'Volokh Conspiracy',
    [Feed.VOX]: 'Vox',
};

export const FeedURL: Record<Feed, string> = {
    [Feed['99_PERCENT_INVISIBLE']]: 'http://feeds.feedburner.com/99pi',
    [Feed.AEON]: 'https://aeon.co/feed.rss',
    [Feed.ATLAS_OBSCURA]: 'https://www.atlasobscura.com/feeds/latest',
    [Feed.BBC_TOP_STORIES]: 'https://feeds.bbci.co.uk/news/rss.xml',
    [Feed.BBC_WORLD]: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    [Feed.CNN_TOP_STORIES]: 'http://rss.cnn.com/rss/cnn_topstories.rss',
    [Feed.CNN_WORLD]: 'http://rss.cnn.com/rss/cnn_world.rss',
    [Feed.EL_PAIS_TOP_STORIES]:
        'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada',
    [Feed.FIVE_THIRTY_EIGHT]: 'https://fivethirtyeight.com/features/feed/',
    [Feed.DAMN_INTERESTING]: 'https://feeds.feedburner.com/damninteresting/all',
    [Feed.GUARDIAN_TOP_STORIES]:
        'https://www.theguardian.com/international/rss',
    [Feed.GUARDIAN_WORLD]: 'https://www.theguardian.com/world/rss',
    [Feed.NATIONAL_REVIEW_THE_CORNER]:
        'https://www.nationalreview.com/corner/feed/',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]:
        'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    [Feed.NEW_YORK_TIMES_WORLD]:
        'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
    [Feed.NEW_YORKER_TOP_STORIES]: 'https://www.newyorker.com/feed/news',
    [Feed.POLITICO_TOP_STORIES]: 'https://rss.politico.com/politics-news.xml',
    [Feed.REDDIT_NBA_HOT]: 'https://www.reddit.com/r/nba/hot.json?limit=10',
    [Feed.REDDIT_FORMULA1_HOT]:
        'https://www.reddit.com/r/formula1/hot.json?limit=5',
    [Feed.REDDIT_NFL_HOT]: 'https://www.reddit.com/r/nfl/hot.json?limit=10',
    [Feed.REDDIT_SOCCER_HOT]:
        'https://www.reddit.com/r/soccer/hot.json?limit=10',
    [Feed.REDDIT_TENNIS_HOT]:
        'https://www.reddit.com/r/tennis/hot.json?limit=5',
    [Feed.VOLOKH_CONSPIRACY]: 'https://reason.com/volokh/feed/',
    [Feed.VOX]: 'https://www.vox.com/rss/index.xml',
};
