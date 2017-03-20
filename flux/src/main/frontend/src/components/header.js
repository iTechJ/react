import React from 'react';
import NavigationStore from '../stores/navigation.store';
import {
  NAVIGATION_TAB_GENRES
} from '../constants/constants';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  componentDidMount() {
    NavigationStore.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(this.state);
  }

  render() {
    return (
      <header>
        <div className='row'>
          <div className='col-xs-12'>
            <nav className='navbar navbar-toggleable-md navbar-light bg-faded' role='navigation'>
              <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='navigation'>
                <span className='navbar-toggler-icon'></span>
              </button>
              <a className='navbar-brand' href='#'>
                <img alt='Logo' src='src/images/logo.png' style={{width:'40px', height: '30px'}}></img>
              </a>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className={NavigationStore.getCurrentTab() === NAVIGATION_TAB_GENRES ? 'nav-item active' : 'nav-item'}>
                    <a>Genres</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

HeaderComponent.propTypes = {};
export default HeaderComponent;
