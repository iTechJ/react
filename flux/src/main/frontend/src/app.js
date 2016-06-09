import React from 'react';
import { render } from 'react-dom';
global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap-webpack');

import IndexComponent from './components/index';

//This line was moved to separate file, because usually there is some logic related to render function(Routing)
render(<IndexComponent /> , document.getElementById('app'));


