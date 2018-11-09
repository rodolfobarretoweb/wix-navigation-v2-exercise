import { AsyncStorage } from 'react-native';
import { fetchTopHeadlines as fetchHeadlines } from '../utils/api';

const NAMESPACE = 'readLaterNews';

export const FETCH_TOP_HEADLINES = 'FETCH_TOP_HEADLINES';
export const UPDATE_READ_LATER_LIST = 'UPDATE_READ_LATER_LIST';
export const FETCH_READ_LATER_LIST = 'FETCH_READ_LATER_LIST';

export const fetchTopHeadlines = () => async dispatch => {
  const payload = await fetchHeadlines('sports');
  dispatch({ type: FETCH_TOP_HEADLINES, payload });
};

export const saveToReadLater = ({ title, url }) => async dispatch => {
  const list = await AsyncStorage.getItem(NAMESPACE);
  const newList = [{ title, url }, ...JSON.parse(list) || []];

  try {
    await AsyncStorage.setItem(NAMESPACE, JSON.stringify(newList));
    dispatch({ type: UPDATE_READ_LATER_LIST, payload: newList });
  } catch(error) {}
};

export const fetchReadLaterList = () => async dispatch => {
  let payload = await AsyncStorage.getItem(NAMESPACE);
  payload = JSON.parse(payload) || [];

  dispatch({ type: FETCH_READ_LATER_LIST, payload });
};
