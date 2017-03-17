import {
  INIT_AUTHORS
} from '../constants/actionTypes';

const initialState = {
  authors: []
};

/*
 Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
 */
const authorsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_AUTHORS:
      return Object.assign({}, state, {authors: action.payload});
    default:
      return state;
  }
};

export default authorsReducer;
