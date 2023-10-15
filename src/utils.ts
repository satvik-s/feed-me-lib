import { Feed, feedPath } from './config';

const ONE_HOUR_MILLI_SECONDS = 1 * 1 * 60 * 60 * 1_000;
const FOUR_HOUR_MILLI_SECONDS = 4 * ONE_HOUR_MILLI_SECONDS;
const ONE_DAY_MILLI_SECONDS = 24 * ONE_HOUR_MILLI_SECONDS;
const TEN_DAY_MILLI_SECONDS = 10 * ONE_DAY_MILLI_SECONDS;

export function generateQueryParamForFeedPath(
    path: string,
): string | undefined {
    return feedPath[path]?.join(',');
}

export function feedPersistanceTimeMilliSeconds(feed: Feed): number {
    switch (feed) {
        case Feed['99_PERCENT_INVISIBLE']:
        case Feed.AEON:
        case Feed.DAMN_INTERESTING:
        case Feed.GUARDIAN_THE_LONG_READ:
        case Feed.LONGREADS:
        case Feed.NAUTILUS:
        case Feed.QUILLETTE:
            return TEN_DAY_MILLI_SECONDS;
        default:
            return ONE_DAY_MILLI_SECONDS;
    }
}

export function feedRefreshTimeMilliSeconds(feed: Feed): number {
    switch (feed) {
        case Feed.FIXTURE_CALENDAR_SAT:
            return FOUR_HOUR_MILLI_SECONDS;
        default:
            return ONE_HOUR_MILLI_SECONDS;
    }
}

export function feedRequiresAscendingTimestampSort(feed: Feed): boolean {
    switch (feed) {
        case Feed.FIXTURE_CALENDAR_SAT:
            return true;
        default:
            return false;
    }
}

export function feedRequiresAbsoluteTimestamp(feed: Feed): boolean {
    switch (feed) {
        case Feed.FIXTURE_CALENDAR_SAT:
            return true;
        default:
            return false;
    }
}

export function skipFeedSortingDueToFeedID(feed: Feed): boolean {
    switch (feed) {
        case Feed.FIXTURE_CALENDAR_SAT:
            return true;
        default:
            return false;
    }
}
