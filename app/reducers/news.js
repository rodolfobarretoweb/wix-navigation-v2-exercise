import { combineReducers } from 'redux';
import { FETCH_TOP_HEADLINES } from '../actions/news';

function listReducer(state = [], action = {}) {
  if(action.type === FETCH_TOP_HEADLINES) {
    return action.payload;
  }

  return state;
}

export default combineReducers({
  list: listReducer
});