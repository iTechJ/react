import React from 'react';
import AuthorsService from '../../services/author.service';
import MenuService from '../../services/menu.service';
import MenuStore from '../../stores/menu.store';
import AuthorStore from '../../stores/author.store';

class AuthorMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  selectMenuItem(author) {
    MenuService.selectItem(author);
  }

  createNewAuthor() {
    MenuService.selectItem({});
  }

  render() {
    return (
      <div className='menu-wrapper'>
        <label htmlFor='authorMenu'>List of Authors</label>
        <ul className='list-group'  id='authorMenu'>
          {
            this.props.items.map(menuItem => {
              return <li key={menuItem.id} className='list-group-item custom-menu-item' onClick={this.selectMenuItem.bind(this, menuItem)}> <a className='menu-link'>{menuItem.firstName} {menuItem.lastName}</a></li>
            })
          }
          <li key='createNew' className='list-group-item active custom-menu-item' onClick={this.createNewAuthor.bind(this)}> <span className="label label-pill pull-xs-right"><i className='glyphicon glyphicon-plus'> </i> </span> <a className='menu-link'> Add new Author </a></li>
        </ul>
      </div>
    );
  }
};

AuthorMenu.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default AuthorMenu;