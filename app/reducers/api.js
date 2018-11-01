import { combineReducers } from 'redux';

function listReducer(state = [], action = {}) {
  return state;
}

export default combineReducers({
  list: listReducer
});