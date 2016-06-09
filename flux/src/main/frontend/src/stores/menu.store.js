import AppDispatcher from '../dispatcher/app.dispatcher';
import {
	SELECT_ITEM
} from '../utils/constants';
import BaseStore from './base.store';

let selectedItem;

class MenuStore extends BaseStore {

  getSelectedItem(){
    return selectedItem;
  }
}

let menuStoreInstance = new MenuStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case SELECT_ITEM:
      selectedItem = action.data;
      menuStoreInstance.emitChange();
      break;
  }
  return true;
});

export default menuStoreInstance;



