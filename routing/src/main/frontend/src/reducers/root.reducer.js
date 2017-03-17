import {combineReducers} from 'redux';
import AuthorsReducer from './author.reducer';
import GenresReducer from './genre.reducer';
import OperationReducer from './operation.reducer';
import NavigationReducer from './navigation.reducer';

export default combineReducers({
  authors: AuthorsReducer,
  genres: GenresReducer,
  operation: OperationReducer,
  navigation: NavigationReducer
});
