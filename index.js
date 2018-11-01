import I18n from 'react-native-i18n';
import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NAMESPACE } from './app/configs/constants';
import { Main } from './app/containers';
import configureStore from './app/configs/store';
import langs from './app/langs';

configureStore();

I18n.fallbacks = true;
I18n.translations = langs;
I18n.defaultLocale = 'pt-BR';

AppRegistry.registerComponent(appName, () => Main);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: { component: { name: `${NAMESPACE}.main` }}
  });
});