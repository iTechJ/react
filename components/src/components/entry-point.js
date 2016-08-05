import React from 'react';
import { render } from 'react-dom';
//User PascalCase for component imports
import ComponentsApp from './components-app';
//This is required by bootstrap-webpack module
global.jQuery = require('jquery');
global.$ = global.jQuery;
//Bootstrap distribution for Webpack
require('bootstrap-webpack');

//This line was moved to separate file, because usually special object will be build here and then passed to render function
//Please notice a whitespace before closing tag
render(<ComponentsApp /> , document.getElementById('app'));
