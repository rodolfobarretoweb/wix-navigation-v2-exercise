import { get } from 'lodash';
import { combineReducers } from 'redux';
import { FETCH_TOP_HEADLINES, UPDATE_READ_LATER_LIST, FETCH_READ_LATER_LIST } from '../actions/news';

function listReducer(state = [], action = {}) {
  if(action.type === FETCH_TOP_HEADLINES) {
    return get(action.payload, 'articles', []);
  }

  return state;
}

function readLaterListReducer(state = [], action = {}) {
  if(action.type === UPDATE_READ_LATER_LIST || action.type === FETCH_READ_LATER_LIST) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  list: listReducer,
  readLaterList: readLaterListReducer
});