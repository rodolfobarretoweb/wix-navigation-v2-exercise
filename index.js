import I18n from 'react-native-i18n';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { getSettings } from './app/configs/navigation';
import configureStore from './app/configs/store';
import langs from './app/langs';
import { registerContainers } from './app/containers';

const store = configureStore();

I18n.fallbacks=true;
I18n.translations=langs;
I18n.defaultLocale='pt-BR';

registerContainers(Provider, store);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(await getSettings());
});