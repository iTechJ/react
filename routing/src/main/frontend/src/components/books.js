import React from 'react';
import BookService from '../services/book.service';
import AuthorsService from '../services/author.service';
import GenresService from '../services/genre.service';
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
    BookService.getBooks();
    AuthorsService.getAuthors();
    GenresService.getGenres();
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