import { fetchTopHeadlines as fetchHeadlines } from '../utils/api';

export const FETCH_TOP_HEADLINES = 'FETCH_TOP_HEADLINES';

export const fetchTopHeadlines = () => async dispatch => {
  const payload = await fetchHeadlines('sports');
  dispatch({ type: FETCH_TOP_HEADLINES, payload });
};