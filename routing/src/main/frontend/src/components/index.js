import React from 'react';
import GenreComponent from './genre/genre-component';
import AuthorComponent from './author/author-component';
import BookComponent from './book/book-component';
import HeaderComponent from './header';
require('../styles/app.css');

/*
This component defines common page layout in application. Children, passed to this component, are content of each specific page
 */
class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className='app-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default IndexComponent;

