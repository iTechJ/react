import {combineReducers} from 'redux';
import GenresReducer from './genre.reducer';
import OperationReducer from './operation.reducer';
import NavigationReducer from './navigation.reducer';

//This attached each reducer to particular field in application state
export default combineReducers({
  genres: GenresReducer,
  operation: OperationReducer,
  navigation: NavigationReducer
});
