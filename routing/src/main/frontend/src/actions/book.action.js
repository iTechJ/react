import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_BOOKS
} from '../utils/constants';

export default {
  initBooks(books) {
    AppDispatcher.handleAction({
      actionType: INIT_BOOKS,
      data: books
    });
  }
}