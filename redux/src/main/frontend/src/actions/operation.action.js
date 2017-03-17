import {
  INIT_OPERATION,
  UPDATE_OPERATION,
  RESET_OPERATION,
  CANCEL_OPERATION
} from '../constants/actionTypes';

export function startOperation(valueObject) {
  //Pure action create : simply creates and returns action
  return {
    type: INIT_OPERATION,
    payload: valueObject
  };
}

export function updateOperation(field, value) {
  return {
    type: UPDATE_OPERATION,
    payload: {
      field : field,
      value : value
    }
  };
}

export function resetOperation() {
  return {
    type: RESET_OPERATION,
    payload: {}
  };
}

export function cancelOperation() {
  return {
    type: CANCEL_OPERATION,
    payload: {}
  };
}
