import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_GENRES
} from '../constants/constants';
import BaseStore from './base.store';

let genres = [];

class GenresStore extends BaseStore {
  getAllGenres() {
    return genres;
  }
}

let genresStoreInstance = new GenresStore();

AppDispatcher.register(function (message) {
  let action = message.action;
  switch (action.type) {
    //When Store receives action with appropriate type, it updates it's internal state and notifies React components about the change
    case INIT_GENRES:
      genres = action.payload;
      genresStoreInstance.emitChange();
      break;
  }
  return true;
});

export default genresStoreInstance;



