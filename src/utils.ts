import { Feed, feedPath } from './config';

export function generateQueryParamForFeedPath(
    path: string,
): string | undefined {
    return feedPath[path]?.join(',');
}

export function feedRequiresLongerPersistence(feed: Feed): boolean {
    switch (feed) {
        case Feed['99_PERCENT_INVISIBLE']:
        case Feed.AEON:
        case Feed.DAMN_INTERESTING:
        case Feed.GUARDIAN_THE_LONG_READ:
        case Feed.LONGREADS:
        case Feed.NAUTILUS:
        case Feed.QUILLETTE:
            return true;
        default:
            return false;
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
