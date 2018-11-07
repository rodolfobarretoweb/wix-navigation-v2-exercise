import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Style from './style';

class Card extends PureComponent {
  render() {
    return <View style={Style.container}>{this.props.children}</View>;
  }
}

Card.propTypes = {
  children: PropTypes.element.isRequired
};

export default Card;
