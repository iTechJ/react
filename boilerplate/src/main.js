import React from 'react';
import { render } from 'react-dom'
global.jQuery = require('jquery');
global.$ = global.jQuery;
require('bootstrap-webpack');

let reactMarkup = (
  <div className='container' style={{marginTop:'15%'}}>
    <div className='row' >
      <div className='col-md-8 col-md-offset-2'>
        <h1 className='text-warning'>Пример простейшего приложения ReactJS</h1>
        <label className='label' htmlFor='notesList'>Важные замечания:</label>
        <ul id='notesList'>
          <li>В качестве сборщика модулей использовался <b>Webpack</b> <a href='https://blog.risingstack.com/using-react-with-webpack-tutorial/' target='_blank'><span className='glyphicon glyphicon-share-alt'></span></a> - См. webpack.config.js и содержимое папки cfg </li>
          <li><b>Twitter Bootstrap </b> <a href='http://getbootstrap.com/css/' target='_blank'><span className='glyphicon glyphicon-share-alt'> </span> </a> использовался для оформления примера</li>
          <li><b>ESLint</b> <a href='http://eslint.org/docs/about/' target='_blank'><span className='glyphicon glyphicon-share-alt'> </span> </a> использовался для статического анализа кода</li>
          <li>Вся разметка примера является объектами <b>JSX</b> <a href='https://facebook.github.io/react/docs/jsx-in-depth.html' target='_blank'><span className='glyphicon glyphicon-share-alt'></span></a>, а не HTML-тэгами</li>
          <li>EcmaScript5 компилируется в JavaScript с помощью <b>Babel></b><a href='https://babeljs.io/docs/learn-es2015/' target='_blank'><span className='glyphicon glyphicon-share-alt'> </span></a> </li>
        </ul>
      </div>
    </div>
  </div>
);

render(reactMarkup , document.getElementById('app'));


