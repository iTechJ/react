import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route} from 'react-router'
import WelcomePage from './components/welcome';
import BooksPage from './components/books';
import AuthorsPage from './components/authors';
import GenresPage from './components/genres';

global.jQuery = require('jquery');
global.$ = global.jQuery;

require('bootstrap-webpack');

//The most common types on history are browserHistory and hashHistory
render((
  <Router history={hashHistory}>
    <Route path='/' component={WelcomePage} />
    <Route path='/genres' component={GenresPage} />
    <Route path='/authors(/:authorId)' component={AuthorsPage} />
    <Route path='/books' component={BooksPage} />
  </Router>
), document.getElementById('app'));
