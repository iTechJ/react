import $ from 'jquery';

import MenuAction from '../actions/menu.action';

export default {
  selectItem(item) {
	  MenuAction.selectItem(item);
  }
}
