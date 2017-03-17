import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import GenresPage from './components/genres';
import LogoImg from './images/logo.png';
require('./styles/app.css');

require('jquery/dist/jquery.min.js');
require('tether/dist/css/tether.min.css');
require('tether/dist/js/tether.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

let store = configureStore();

//When using Redux, you should wrap you component into Provider component. It "enables" connect function
render((
	<Provider store={store}>
    <GenresPage />
	</Provider>
), document.getElementById('app'));
