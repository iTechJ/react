import React from 'react';
import { render } from 'react-dom';
import GenresPage from './components/genres';
import LogoImg from './images/logo.png';
require('./styles/app.css');

require('jquery/dist/jquery.min.js');
require('tether/dist/css/tether.min.css');
require('tether/dist/js/tether.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

render(<GenresPage /> , document.getElementById('app'));


