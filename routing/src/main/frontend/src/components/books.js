import React from 'react';

import IndexComponent from './index';
import BookComponent from './book/book-component';
import NavigationAction from '../actions/navigation.action';
import {
  NAVIGATION_TAB_BOOKS
} from '../utils/constants';

class BooksPage extends React.Component {

  constructor(props) {
    super(props);
    NavigationAction.selectTab(NAVIGATION_TAB_BOOKS);
  }

  render() {
    return (
      <IndexComponent>
        <BookComponent />
      </IndexComponent>
    );
  }
}

export default BooksPage;