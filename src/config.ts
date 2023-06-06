export enum Feed {
    AEON = 'aeon-general',
    BBC_TOP_STORIES = 'bbc-top_stories',
    BBC_WORLD = 'bbc-world',
    CNN_TOP_STORIES = 'cnn-top_stories',
    CNN_WORLD = 'cnn-world',
    EL_PAIS_TOP_STORIES = 'el_pais-top_stories',
    GUARDIAN_TOP_STORIES = 'guardian-top_stories',
    GUARDIAN_WORLD = 'guardian-world',
    NEW_YORK_TIMES_TOP_STORIES = 'new_york_times-top_stories',
    NEW_YORK_TIMES_WORLD = 'new_york_times-world',
    NEW_YORKER_TOP_STORIES = 'new_yorker-top_stories',
    POLITICO_TOP_STORIES = 'politico-top_stories',
    REDDIT_FORMULA1 = 'reddit-formula1',
    REDDIT_NBA = 'reddit-nba',
    REDDIT_NFL = 'reddit-nfl',
    REDDIT_SOCCER = 'reddit-soccer',
    REDDIT_TENNIS = 'reddit-tennis',
}

export const FeedName: Record<Feed, string> = {
    [Feed.AEON]: 'aeon',
    [Feed.BBC_TOP_STORIES]: 'BBC',
    [Feed.BBC_WORLD]: 'BBC',
    [Feed.CNN_TOP_STORIES]: 'CNN',
    [Feed.CNN_WORLD]: 'CNN',
    [Feed.EL_PAIS_TOP_STORIES]: 'El País',
    [Feed.GUARDIAN_TOP_STORIES]: 'the Guardian',
    [Feed.GUARDIAN_WORLD]: 'the Guardian',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]: 'the New York Times',
    [Feed.NEW_YORK_TIMES_WORLD]: 'the New York Times',
    [Feed.NEW_YORKER_TOP_STORIES]: 'the New Yorker',
    [Feed.POLITICO_TOP_STORIES]: 'Politico',
    [Feed.REDDIT_FORMULA1]: 'r/Formula1',
    [Feed.REDDIT_NBA]: 'r/NBA',
    [Feed.REDDIT_NFL]: 'r/NFL',
    [Feed.REDDIT_SOCCER]: 'r/soccer',
    [Feed.REDDIT_TENNIS]: 'r/tennis',
};

export const FeedURL: Record<Feed, string> = {
    [Feed.AEON]: 'https://aeon.co/feed.rss',
    [Feed.BBC_TOP_STORIES]: 'https://feeds.bbci.co.uk/news/rss.xml',
    [Feed.BBC_WORLD]: 'https://feeds.bbci.co.uk/news/world/rss.xml',
    [Feed.CNN_TOP_STORIES]: 'http://rss.cnn.com/rss/cnn_topstories.rss',
    [Feed.CNN_WORLD]: 'http://rss.cnn.com/rss/cnn_world.rss',
    [Feed.EL_PAIS_TOP_STORIES]:
        'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada',
    [Feed.GUARDIAN_TOP_STORIES]:
        'https://www.theguardian.com/international/rss',
    [Feed.GUARDIAN_WORLD]: 'https://www.theguardian.com/world/rss',
    [Feed.NEW_YORK_TIMES_TOP_STORIES]:
        'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
    [Feed.NEW_YORK_TIMES_WORLD]:
        'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',
    [Feed.NEW_YORKER_TOP_STORIES]: 'https://www.newyorker.com/feed/news',
    [Feed.POLITICO_TOP_STORIES]: 'https://rss.politico.com/politics-news.xml',
    [Feed.REDDIT_NBA]: 'https://www.reddit.com/r/nba/hot.json?limit=10',
    [Feed.REDDIT_FORMULA1]:
        'https://www.reddit.com/r/formula1/hot.json?limit=5',
    [Feed.REDDIT_NFL]: 'https://www.reddit.com/r/nfl/hot.json?limit=10',
    [Feed.REDDIT_SOCCER]: 'https://www.reddit.com/r/soccer/hot.json?limit=10',
    [Feed.REDDIT_TENNIS]: 'https://www.reddit.com/r/tennis/hot.json?limit=5',
};
