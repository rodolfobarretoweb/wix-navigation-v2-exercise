import React, { PureComponent } from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NAMESPACE } from '../../../configs/constants';
import ItemList from '../../../components/itemList';

class Item extends PureComponent {
  onPress = async () => {
    const { url, title } = this.props.data;

    const icon = await Icon.getImageSource('window-close', 20, '#333');
    const containerId = 'webContainer';

    Navigation.showModal({
      stack: {
        children: [{
          component: {
            id: containerId,
            name: `${NAMESPACE}.${containerId}`,
            passProps: { url },
            options: {
              topBar: {
                title: { text: title },
                leftButtons: [{
                  id: 'webContainerBackButton',
                  color: '#333',
                  icon
                }]
              }
            }
          }
        }]
      }
    });
  }

  render() {
    return(
      <ItemList
        label={this.props.data.title}
        iconName="link"
        onPress={this.onPress}
      />
    );
  }
}

export default Item;
