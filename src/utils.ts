import { Feed } from './config';

export function feedRequiresLongerPersistence(feed: Feed): boolean {
    switch (feed) {
        case Feed['99_PERCENT_INVISIBLE']:
        case Feed.AEON:
        case Feed.DAMN_INTERESTING:
        case Feed.LONGREADS:
        case Feed.NAUTILUS:
        case Feed.QUILLETTE:
            return true;
        default:
            return false;
    }
}