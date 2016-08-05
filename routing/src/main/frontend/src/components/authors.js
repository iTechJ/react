import React from 'react';
import AuthorsService from '../services/author.service';
import IndexComponent from './index';
import AuthorComponent from './author/author-component';
import NavigationAction from '../actions/navigation.action';
import {
  NAVIGATION_TAB_AUTHORS
} from '../utils/constants';

class AuthorsPage extends React.Component {

  constructor(props) {
    super(props);
    //You already know, top-level component initializes data, required to correctly render the page
    NavigationAction.selectTab(NAVIGATION_TAB_AUTHORS);
    AuthorsService.getAuthors();
  }

  render() {
    //We are using Nested components here! Please review code of IndexComponent
    return (
      <IndexComponent>
        <AuthorComponent />
      </IndexComponent>
    );
  }
}

export default AuthorsPage;