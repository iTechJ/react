import AppDispatcher from '../dispatcher/app.dispatcher';
import BaseStore from './base.store';
import {
  SELECT_NAVIGATION_TAB
} from '../constants/actionTypes';

let currentTab = '';

class NavigationStore extends BaseStore {
  getCurrentTab() {
    return currentTab;
  }
}

let navigationStoreInstance = new NavigationStore();

AppDispatcher.register(function (message) {
  let action = message.action;
  switch (action.type) {
    //When Store receives action with appropriate type, it updates it's internal state and notifies React components about the change
    case SELECT_NAVIGATION_TAB:
      currentTab = action.payload;
      navigationStoreInstance.emitChange();
      break;
  }
  return true;
});

export default navigationStoreInstance;



