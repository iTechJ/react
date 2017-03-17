import React from 'react';
import ReactDOM from 'react-dom';
//User PascalCase for component imports
import ComponentsApp from './layout/components-app';
import { AppContainer } from 'react-hot-loader';
require('./style.css');
require('jquery/dist/jquery.min.js');
require('tether/dist/css/tether.min.css');
require('tether/dist/js/tether.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');

//This line was moved to separate file, because usually special object will be build here and then passed to render function
//Pay attention to the whitespace before closing tag
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

render(ComponentsApp);

if (module.hot) {
  module.hot.accept('./layout/components-app', () => { render(ComponentsApp) })
}
