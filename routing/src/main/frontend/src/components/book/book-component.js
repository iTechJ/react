import React from 'react';
import BookService from '../../services/book.service';
import MenuStore from '../../stores/menu.store';
import BookStore from '../../stores/book.store';
import BookMenu from './book-menu';
import BookEditor from './book-editor';
import AuthorsService from '../../services/author.service';
import GenresService from '../../services/genre.service';

class BookComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getCurrentState = this.getCurrentState.bind(this);
    this.state = this.getCurrentState();
    BookService.getBooks();
    AuthorsService.getAuthors();
    GenresService.getGenres();
  }

  componentDidMount() {
    BookStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    BookStore.removeChangeListener(this.onChange);
  }

  getCurrentState() {
    return {
      books: BookStore.getBooks() ? BookStore.getBooks() : []
    }
  }

  onChange() {
    this.setState(this.getCurrentState());
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3 col-sm-4'>
            <BookMenu items={this.state.books}/>
          </div>
          <div className='col-md-9 col-sm-8'>
            <BookEditor />
          </div>
        </div>
      </div>
    );
  }
}

BookComponent.propTypes = {

};

export default BookComponent;
