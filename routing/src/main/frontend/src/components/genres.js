import React from 'react';

import IndexComponent from './index';
import GenreComponent from './genre/genre-component';
import NavigationAction from '../actions/navigation.action';
import {
  NAVIGATION_TAB_GENRES
} from '../utils/constants';

class GenresPage extends React.Component {

  constructor(props) {
    super(props);
    NavigationAction.selectTab(NAVIGATION_TAB_GENRES);
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