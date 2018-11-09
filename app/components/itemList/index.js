import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './style';

class ItemList extends PureComponent {
  render() {
    const { label, iconName, onPress } = this.props;

    return(
      <TouchableHighlight underlayColor='transparent' onPress={onPress}>
        <View style={Style.container}>
          <View style={Style.iconContainer}>
            <Icon name={iconName} size={25} color="#333" />
          </View>

          <View style={Style.labelContainer}>
            <Text style={Style.label}>{label}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

ItemList.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default ItemList;
