import {
  INIT_GENRES
} from '../constants/actionTypes';

const initialState = {
  genres: []
};
/*
 Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.
 */
const genresReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_GENRES:
      return Object.assign({}, state, {genres: action.payload});
    default:
      return state;
  }
};

export default genresReducer;
