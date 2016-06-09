import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_GENRES
} from '../utils/constants';

export default {
  initGenres(genres) {
    AppDispatcher.handleAction({
      actionType: INIT_GENRES,
      data: genres
    });
  }
}