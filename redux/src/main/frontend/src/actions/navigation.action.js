import {
  SELECT_NAVIGATION_TAB
} from '../constants/actionTypes';

export function selectTab(selectedTab) {
  return {
    type: SELECT_NAVIGATION_TAB,
    payload: selectedTab
  };
}
