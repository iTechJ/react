import React from 'react';
import { Link } from 'react-router';
import NavigationStore from '../stores/navigation.store';
import {
  NAVIGATION_TAB_GENRES,
  NAVIGATION_TAB_AUTHORS,
  NAVIGATION_TAB_BOOKS
} from '../utils/constants';
import LogoImg from '../images/logo.png';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state  = {activeItem : NavigationStore.getSelectedTab()};
  }

  componentDidMount() {
    NavigationStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    NavigationStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({activeItem : NavigationStore.getSelectedTab()});
  }

  render() {
    return (
      <section className='app-header'>
        <div className='container'>
          <nav className='navbar navbar-light navbar-static-top' role='navigation'>
            <div className='container-fluid'>
              <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                  <img alt='Logo' src='src/images/logo.png' style={{width:'40px', height: '30px'}}></img>
                </a>
              </div>
              <div className='collapse navbar-collapse'>
                <ul className='nav navbar-nav'>
                  <li className={this.state.activeItem === NAVIGATION_TAB_GENRES ? 'active' : null}>
                    <Link  to='/genres'>Genres</Link>
                  </li>
                  <li className={this.state.activeItem === NAVIGATION_TAB_AUTHORS ? 'active' : null}>
                    <Link to='/authors'>Authors</Link>
                  </li>
                  <li className={this.state.activeItem === NAVIGATION_TAB_BOOKS ? 'active' : null}>
                    <Link to='/books'>Books</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default HeaderComponent;
