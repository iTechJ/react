import React from 'react';

import IndexComponent from './index';
import AuthorComponent from './author/author-component';
import NavigationAction from '../actions/navigation.action';
import {
  NAVIGATION_TAB_AUTHORS
} from '../utils/constants';

class AuthorsPage extends React.Component {

  constructor(props) {
    super(props);
    NavigationAction.selectTab(NAVIGATION_TAB_AUTHORS);
  }

  render() {
    return (
      <IndexComponent>
        <AuthorComponent />
      </IndexComponent>
    );
  }
}

export default AuthorsPage;