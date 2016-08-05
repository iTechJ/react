import AppDispatcher from '../dispatcher/app.dispatcher';
import {
    INIT_AUTHORS
} from '../utils/constants';
import BaseStore from './base.store';

let authors;

class AuthorsStore extends BaseStore {

  getAuthors(){
    return authors;
  }
}

let storeInstance = new AuthorsStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_AUTHORS:
      authors = action.data;
      storeInstance.emitChange();
      break;
  }
  return true;
});

export default storeInstance;



