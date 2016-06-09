import React from 'react';
import BookService from '../../services/author.service';
import MenuService from '../../services/menu.service';
import MenuStore from '../../stores/menu.store';
import BookStore from '../../stores/author.store';

class BookMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  selectMenuItem(book) {
    MenuService.selectItem(book);
  }

  createNewAuthor() {
    MenuService.selectItem({});
  }

  render() {
    return (
      <div className='menu-wrapper'>
        <label htmlFor='bookMenu'>List of Books</label>
        <ul className='list-group' id='bookMenu'>
          {
            this.props.items.map(menuItem => {
              return <li key={menuItem.id} className='list-group-item custom-menu-item' onClick={this.selectMenuItem.bind(this, menuItem)}><a className='menu-link'>{menuItem.bookName}</a></li>
            })
          }
          <li key='createNew' className='list-group-item active custom-menu-item' onClick={this.createNewAuthor.bind(this)}> <span className="label label-pill pull-xs-right"><i className='glyphicon glyphicon-plus'> </i> </span><a className='menu-link'>Add New Book</a></li>
        </ul>
      </div>
    );
  }
};

BookMenu.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default BookMenu;