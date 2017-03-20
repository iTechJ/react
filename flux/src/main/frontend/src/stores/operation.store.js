import AppDispatcher from '../dispatcher/app.dispatcher';
import {
  INIT_OPERATION,
  UPDATE_OPERATION,
  RESET_OPERATION,
  CANCEL_OPERATION
} from '../constants/actionTypes';

import BaseStore from './base.store';

let modifiedValue = null;
let operationValue = null;
let isChanged = false;

class OperationStore extends BaseStore {

  getOriginalObject() {
    return operationValue;
  }
  getOperationObject(){
    return modifiedValue;
  }
  isChanged() {
    return isChanged;
  }
}

let operationStoreInstance = new OperationStore();

AppDispatcher.register(function(message) {
  let action = message.action;
  switch(action.type) {
    case INIT_OPERATION:
      modifiedValue = Object.assign({}, action.payload);
      operationValue = Object.assign({}, action.payload);
      isChanged = false;
      operationStoreInstance.emitChange();
      break;
    case UPDATE_OPERATION:
      modifiedValue[action.payload.field] = action.payload.value;
      isChanged = true;
      operationStoreInstance.emitChange();
      break;
    case RESET_OPERATION:
      modifiedValue = Object.assign({}, operationValue);
      isChanged = false;
      operationStoreInstance.emitChange();
      break;
    case CANCEL_OPERATION:
      modifiedValue = null;
      operationValue = null;
      isChanged = false;
      operationStoreInstance.emitChange();
      break;
  }
  return true;
});

export default operationStoreInstance;
