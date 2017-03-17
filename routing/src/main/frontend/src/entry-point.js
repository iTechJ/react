import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route} from 'react-router';
import { Provider } from 'react-redux';
import WelcomePage from './components/welcome';
import AuthorsPage from './components/authors';
import GenresPage from './components/genres';
import configureStore from './stores/configureStore';
import LogoImg from './images/logo.png';
require('./styles/app.css');

require('jquery/dist/jquery.min.js');
require('tether/dist/css/tether.min.css');
require('tether/dist/js/tether.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

let store = configureStore();

//When using Redux, you should wrap you component into Provider component. It "enables" connect function
//When using Routing, you should render Router inside Provider instead of your custom component
render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={WelcomePage} onEnter={() => {/*It'll be called when you land on WelcomePage*/}}/>
			<Route path='/genres' component={GenresPage} onEnter={() => {/*onEnter hooks can be used to load data into store*/}}/>
			<Route path='/authors(/:authorId)' component={AuthorsPage}/>
		</Router>
	</Provider>
), document.getElementById('app'));
