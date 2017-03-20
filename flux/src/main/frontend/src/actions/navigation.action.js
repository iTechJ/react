import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  SELECT_NAVIGATION_TAB
} from '../constants/actionTypes';

export default {
  selectTab(selectedTab) {
    AppDispatcher.handleAction({ //Usually action contains only 2 fields: type and payload
      type: SELECT_NAVIGATION_TAB,
      payload: selectedTab
    });
  }
}
