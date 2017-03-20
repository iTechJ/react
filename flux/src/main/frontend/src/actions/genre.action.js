import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_GENRES
} from '../constants/constants';

/*
This is action creator. It passes action to Dispatcher (Which is provided by flux modules)
 */
export default {
  initGenres(genres) {
    AppDispatcher.handleAction({
      type: INIT_GENRES,   //Usually action contains only 2 fields: type and payload
      payload: genres
    });
  }
}
//For next step please review genre.store.js
