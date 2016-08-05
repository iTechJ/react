import React from 'react';
import GenreComponent from './genre/genre-component';
import AuthorComponent from './author/author-component';
import BookComponent from './book/book-component';
import LogoImg from '../images/logo.png';
require('../styles/app.css');
/*
* Currently there is no routing in application, so you will have to modify code in order to view another page.
* Available pages are: GenreComponent, AuthorComponent and BookComponent
* We will add routing later in next example
*/
//In this example only Genres-related components have comments
class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className='app-body'>
           <GenreComponent />
        </div>
      </div>
    );
  }
}

export default IndexComponent;

class HeaderComponent extends React.Component {
  render() {
    return (
        <section className='app-header'>
          <div className='container'>
            <nav className='navbar navbar-light navbar-static-top' role='navigation'>
              <div className='container-fluid'>
                <div className='navbar-header'>
                  <a className='navbar-brand' href='#'>
                    <img alt='Logo' src='src/images/logo.png' style={{width:'40px', height: '30px'}}></img>
                  </a>
                </div>
                <div className='collapse navbar-collapse'>
                  <ul className='nav navbar-nav'>
                    <li className='active'><a href='#'>Genres</a></li>
                    <li><a href='#'>Authors</a></li>
                    <li><a href='#'>Books</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>
    );
  }
}