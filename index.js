import I18n from 'react-native-i18n';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { NAMESPACE } from './app/configs/constants';
import configureStore from './app/configs/store';
import langs from './app/langs';
import { TopHeadlines, ReadLater } from './app/containers';

const store = configureStore();

I18n.fallbacks=true;
I18n.translations=langs;
I18n.defaultLocale='pt-BR';

Navigation.registerComponentWithRedux(`${NAMESPACE}.topHeadlines`, () => TopHeadlines, Provider, store);
Navigation.registerComponentWithRedux(`${NAMESPACE}.readLater`, () => ReadLater, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: `${NAMESPACE}.topHeadlines`,
              options: {
                bottomTab: {
                  text: I18n.t('shared.bottomTabs.topHeadlines')
                }
              }
            }
          },

          {
            component: {
              name: `${NAMESPACE}.readLater`,
              options: {
                bottomTab: {
                  text: I18n.t('shared.bottomTabs.readLater')
                }
              }
            }
          }
        ]
      }
    }
  });
});