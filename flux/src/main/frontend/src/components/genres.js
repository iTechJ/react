import React from 'react';
import OperationAction from '../actions/operation.action';
import NavigationAction from '../actions/navigation.action';
import GenresService from '../services/genre.service';
import IndexComponent from './index';
import GenreComponent from './genre/genre-component';
import {
  NAVIGATION_TAB_GENRES
} from '../constants/constants';

class GenresPage extends React.Component {

  constructor(props) {
    super(props);
    /* Load data for page */
    NavigationAction.selectTab(NAVIGATION_TAB_GENRES);
    GenresService.loadGenres();
    OperationAction.cancelOperation();
  }

  render() {
    return (
      <IndexComponent>
        <GenreComponent />
      </IndexComponent>
    );
  }
}

export default GenresPage;
