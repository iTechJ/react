import AppDispatcher from '../dispatcher/app.dispatcher';
import {
	INIT_GENRES
} from '../utils/constants';
import BaseStore from './base.store';

let genres;

class GenresStore extends BaseStore {

  getAllGenres(){
    return genres;
  }
}

let genresStoreInstance = new GenresStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_GENRES:
      genres = action.data;
      genresStoreInstance.emitChange();
      break;
  }
  return true;
});

export default genresStoreInstance;



