import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_GENRES
} from '../utils/constants';

/*
This is action creator. It passes action to Dispatcher (which is provided by flux modules)
 */
export default {
  initGenres(genres) {
    AppDispatcher.handleAction({
      actionType: INIT_GENRES,   //Usually action contains only 2 fields: Data and Type
      data: genres
    });
  }
}
//For next step please review genre.store.js