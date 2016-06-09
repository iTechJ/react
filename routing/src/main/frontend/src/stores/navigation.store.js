import AppDispatcher from '../dispatcher/app.dispatcher';
import {
	SELECT_NAVIGATION_TAB
} from '../utils/constants';
import BaseStore from './base.store';

let currentNavigationTab;

class NavigationStore extends BaseStore {

  getSelectedTab(){
    return currentNavigationTab;
  }
}

let  navigationStoreInstance = new NavigationStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case SELECT_NAVIGATION_TAB:
      currentNavigationTab = action.data;
      navigationStoreInstance.emitChange();
      break;
  }
  return true;
});

export default navigationStoreInstance;



