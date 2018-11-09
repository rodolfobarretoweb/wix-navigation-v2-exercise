import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NAMESPACE } from './constants';

const defaultStyle = {
  iconColor: '#999',
  textColor: '#999',
  selectedIconColor: '#333',
  selectedTextColor: '#333'
};

export const getSettings = async () => {
  const topHeadlinesIcon = await Icon.getImageSource('book-open', 20, '#333');
  const readLaterIcon = await Icon.getImageSource('clock', 20, '#333');

  return {
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: `${NAMESPACE}.topHeadlines`,
              options: {
                bottomTab: {
                  text: I18n.t('shared.bottomTabs.topHeadlines'),
                  icon: topHeadlinesIcon,
                  ...defaultStyle
                }
              }
            }
          },

          {
            component: {
              name: `${NAMESPACE}.readLater`,
              options: {
                bottomTab: {
                  text: I18n.t('shared.bottomTabs.readLater'),
                  icon: readLaterIcon,
                  ...defaultStyle
                }
              }
            }
          }
        ]
      }
    }
  };
}