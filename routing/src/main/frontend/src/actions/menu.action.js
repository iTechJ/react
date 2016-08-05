import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  SELECT_ITEM
} from '../utils/constants';

export default {
  selectItem(selectedItem) {
    AppDispatcher.handleAction({
      actionType: SELECT_ITEM,
      data: selectedItem
    });
  }
}
