import React from 'react';
import { render } from 'react-dom'

let reactMarkup = (
  <div>
    <p style={{marginLeft: 'auto', marginRight:'auto', width: '200px'}}>
      Hello, world!
      <br />
      <small>This is the simplest <b>React</b> application</small>
    </p>
  </div>
);

render(reactMarkup , document.getElementById('app'));


