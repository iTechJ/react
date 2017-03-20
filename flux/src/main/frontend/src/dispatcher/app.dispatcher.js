import {Dispatcher} from 'flux';
import {
  VIEW_ACTION
} from '../constants/constants';

class DispatcherClass extends Dispatcher {

  handleAction(action) {
    this.dispatch({
      source: VIEW_ACTION,
      action: action
    });
  }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;

