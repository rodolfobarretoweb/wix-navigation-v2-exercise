import { Navigation } from "react-native-navigation";
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NAMESPACE } from './app/configs/constants';
import { Main } from './app/containers';

AppRegistry.registerComponent(appName, () => Main);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: { component: { name: `${NAMESPACE}.main` }}
  });
});