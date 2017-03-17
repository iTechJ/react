import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'; //This works as <a>, but pays attention at type of History you're using
import {
  NAVIGATION_TAB_AUTHORS,
  NAVIGATION_TAB_GENRES,
  AUTHORS_URL,
  GENRES_URL
} from '../constants/constants';

class HeaderComponent extends React.Component {

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
                  <li className={this.props.activeItem === NAVIGATION_TAB_AUTHORS ? 'nav-item active' : 'nav-item'}>
                    <Link className='nav-link' to={AUTHORS_URL}>Authors</Link>
                  </li>
                  <li className={this.props.activeItem === NAVIGATION_TAB_GENRES ? 'nav-item active' : 'nav-item'}>
                    <Link className='nav-link' to={GENRES_URL}>Genres</Link>
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

HeaderComponent.propTypes = {
  activeItem: React.PropTypes.string
};

function mapStateToProps(state) {
  return {
    activeItem: state.navigation.currentTab
  }
}

export default connect(mapStateToProps)(HeaderComponent);
