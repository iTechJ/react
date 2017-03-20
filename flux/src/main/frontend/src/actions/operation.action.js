import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_OPERATION,
  UPDATE_OPERATION,
  RESET_OPERATION,
  CANCEL_OPERATION
} from '../constants/actionTypes';
/*
 This is action creator. It passes action to Dispatcher (Which is provided by flux modules)
 */
export default {
  startOperation(valueObject) {
    AppDispatcher.handleAction({ //Usually action contains only 2 fields: type and payload
      type: INIT_OPERATION,
      payload: valueObject
    });
  },
  updateOperation(field, value) {
    AppDispatcher.handleAction({ //Usually action contains only 2 fields: type and payload
      type: UPDATE_OPERATION,
      payload: {
        field: field,
        value: value
      }
    });
  },
  resetOperation() {
    AppDispatcher.handleAction({ //Usually action contains only 2 fields: type and payload
      type: RESET_OPERATION,
      payload: {}
    });
  },
  cancelOperation() {
    AppDispatcher.handleAction({//Usually action contains only 2 fields: type and payload
      type: CANCEL_OPERATION,
      payload: {}
    });
  }
}

//For next step please review genre.store.js
