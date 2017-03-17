import {
  SELECT_NAVIGATION_TAB
} from '../constants/actionTypes';

const initialState = {
  currentTab: ''
};
/*
 Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
 */
const navigationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT_NAVIGATION_TAB:
      return Object.assign({}, state, {currentTab: action.payload});
    default:
      return state;
  }
};

export default navigationReducer;


