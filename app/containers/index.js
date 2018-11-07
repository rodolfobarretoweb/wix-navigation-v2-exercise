import { NAMESPACE } from '../configs/constants';
import { Navigation } from 'react-native-navigation';
import TopHeadlines from './topHeadlines';
import TopHeadlinesWebContainer from './topHeadlines/webContainer';
import ReadLater from './readLater';

export function registerContainers(provider, store) {
  Navigation.registerComponentWithRedux(`${NAMESPACE}.topHeadlines`, () => TopHeadlines, provider, store);
  Navigation.registerComponentWithRedux(`${NAMESPACE}.topHeadlinesWebContainer`, () => TopHeadlinesWebContainer, provider, store);
  Navigation.registerComponentWithRedux(`${NAMESPACE}.readLater`, () => ReadLater, provider, store);
}