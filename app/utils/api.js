import { LIMIT_DEFAULT } from '../configs/constants';
import { NEWS_API_KEY, NEWS_API_BASE_URL } from '../configs/env';

export const fetchTopHeadlines = async (category, country = 'br') => {
  let url = `${NEWS_API_BASE_URL}/top-headlines?`;
  url += `country=${country}&`;
  url += `category=${category}&`;
  url += `pageSize=${LIMIT_DEFAULT}&`;
  url += `apiKey=${NEWS_API_KEY}`;

  const response = await fetch(url);
  return await response.json();
}
