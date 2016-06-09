import React from 'react';
import { render } from 'react-dom';
import StatePropsApp from './state-and-props';
global.jQuery = require('jquery');
global.$ = global.jQuery;
require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');

//This line was moved to separate file, because usually there is some logic related to render function(Routing)
//"state and props" label is shown capitalized because of 'text-capitalize' css class
//"Working with forms" label is shown in lowercase because of 'text-lowercase' css class
render(<StatePropsApp pageTitle='state and props. Working with forms' isSubtitleReadOnly={false}/> , document.getElementById('app'));


