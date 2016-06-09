import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  SELECT_NAVIGATION_TAB
} from '../utils/constants';

export default {
  selectTab(selectedTab) {
    AppDispatcher.handleAction({
      actionType: SELECT_NAVIGATION_TAB,
      data: selectedTab
    });
  }
}
