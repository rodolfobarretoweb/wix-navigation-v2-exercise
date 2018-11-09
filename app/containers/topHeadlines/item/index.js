import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
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
  state = {
    markedToReadLater: false
  };

  onPressReadMore = async () => {
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

  onPressReadLater = () => {
    this.setState({ markedToReadLater: !this.state.markedToReadLater });
    this.props.onPressReadLater(this.props.data);
  }

  getReadLaterButtonStyle() {
    const style = [Style.button];

    if(this.state.markedToReadLater) {
      style.push(Style.disableButton);
    }

    return style;
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

              <Button
                onPress={this.onPressReadLater}
                style={this.getReadLaterButtonStyle()}
                label={I18n.t('topHeadlines.readLater')}
              />
            </View>
          </View>
        </View>
      </Card>
    );
  }
}

Item.propTypes = {
  onPressReadLater: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    content: PropTypes.string,
    urlToImage: PropTypes.string
  })
}

export default Item;
