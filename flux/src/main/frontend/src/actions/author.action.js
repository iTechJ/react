import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_AUTHORS
} from '../utils/constants';

export default {
  initAuthors(authors) {
    AppDispatcher.handleAction({
      actionType: INIT_AUTHORS,
      data: authors
    });
  }
}