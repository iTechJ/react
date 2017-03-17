import React from 'react';
import ReactDOM from 'react-dom';
import StatePropsApp from './state-and-props';
import { AppContainer } from 'react-hot-loader';
require('jquery/dist/jquery.min.js');
require('tether/dist/css/tether.min.css');
require('tether/dist/js/tether.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

//This line was moved to separate file, because usually special object will be build here and then passed to render function
const render = (component) => {
  ReactDOM.render(
    <AppContainer>
      {component}
    </AppContainer>,
    document.getElementById('app')
  )
};

render(<StatePropsApp pageTitle='State and props. Working with forms' isSubtitleReadOnly={false}/>);

if (module.hot) {
  module.hot.accept('./layout/components-app', () => { render(<StatePropsApp pageTitle='State and props. Working with forms' isSubtitleReadOnly={false}/>) })
}
