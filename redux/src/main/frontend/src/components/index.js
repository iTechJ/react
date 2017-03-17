import React from 'react';
import HeaderComponent from './header';
require('../styles/app.css');

class IndexComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default IndexComponent;

