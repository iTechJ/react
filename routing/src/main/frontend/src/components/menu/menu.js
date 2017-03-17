import React from 'react';
import { Link } from 'react-router';

class Menu extends React.Component {

  buildMenuItemLabel(menuItem) {
    return (
      <span>
        {
          menuItem.icon ? (<span className='label label-pill pull-xs-right'><i className={menuItem.icon}></i></span>) : null
        }
        {menuItem.label}
      </span>
    );
  }

  render() {
    const menuItems = this.props.items.map(menuItem => {
      const additionalClassName = menuItem.active ? 'active' : '';
      return (
        <li key={menuItem.id} className={`${additionalClassName} list-group-item custom-menu-item`}>
          {
            menuItem.url ?
              <Link to={menuItem.url} onClick={menuItem.onClick}> {this.buildMenuItemLabel(menuItem)}</Link>
              :
              <a onClick={menuItem.onClick}>{this.buildMenuItemLabel(menuItem)} </a>
          }
        </li>
      );
    });
    return (
      <div className='menu-wrapper'>
        <label htmlFor='menu'>{this.props.header}</label>
        <ul className='list-group' id='menu'>
          {menuItems}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  header: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired
};

export default Menu;

