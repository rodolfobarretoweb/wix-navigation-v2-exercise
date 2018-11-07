import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { truncate } from 'lodash';
import { NAMESPACE } from '../../../configs/constants';
import { momentsAgo } from '../../../utils/date';
import Card from '../../../components/card';
import Button from '../../../components/button';
import Style from './style';

class Item extends PureComponent {
  onPressReadMore = async () => {
    const { url, title } = this.props.data;

    const icon = await Icon.getImageSource('window-close', 20, '#333');
    const containerId = 'topHeadlinesWebContainer';

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
                  id: 'topHeadlinesWebContainerBackButton',
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

  onPressReadLater = () => {

  }

  render() {
    const { title, publishedAt, content, urlToImage } = this.props.data;

    return(
      <Card>
        <View style={Style.container}>
          { urlToImage ? <Image source={{ uri: urlToImage }} style={Style.image}/> : null }

          <View style={Style.contentContainer}>
            <Text style={Style.subTitleLabel}>{momentsAgo(publishedAt)}</Text>
            <Text style={Style.titleLabel}>{title}</Text>
            { content ? <Text style={Style.contentLabel}>{truncate(content, { length: 120, separator: '...' })}</Text> : null }

            <View style={Style.buttonsContainer}>
              <Button onPress={this.onPressReadMore} style={Style.button} label={I18n.t('topHeadlines.readMore')}/>
              <Button onPress={this.onPressReadLater} style={Style.button} label={I18n.t('topHeadlines.readLater')}/>
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

export default Item;
