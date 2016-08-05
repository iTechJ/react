import React from 'react';
import { render } from 'react-dom';
global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap-webpack');

import IndexComponent from './components/index';

render(<IndexComponent /> , document.getElementById('app'));


