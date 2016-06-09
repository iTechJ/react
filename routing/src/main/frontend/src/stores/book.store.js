import AppDispatcher from '../dispatcher/app.dispatcher';
import {
	INIT_BOOKS
} from '../utils/constants';
import BaseStore from './base.store';

let books;

class BookStore extends BaseStore {

  getBooks(){
    return books;
  }
}

let storeInstance = new BookStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_BOOKS:
      books = action.data;
      storeInstance.emitChange();
      break;
  }
  return true;
});

export default storeInstance;



