import { Navigation } from "react-native-navigation";
import { NAMESPACE } from '../configs/constants';
import Main from "./main";

Navigation.registerComponent(`${NAMESPACE}.main`, () => Main);

export {
  Main
};