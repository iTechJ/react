import React from 'react';
import { render } from 'react-dom';
//User PascalCase for component imports
import ComponentsApp from './components-app';
global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap-webpack');

//This line was moved to separate file, because usually there is some logic related to render function(Routing)
//Please notice a whitespace before closing tag
render(<ComponentsApp /> , document.getElementById('app'));


