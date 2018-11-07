import React, { PureComponent } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { upperCase } from 'lodash';
import PropTypes from 'prop-types';
import Style from './style';

class Button extends PureComponent {
  render() {
    const { label, style, ...otherProps } = this.props;

    return(
      <TouchableHighlight
        {...otherProps}
        style={[ Style.container, style ]}
        underlayColor='transparent'
      >
        <Text style={Style.label}>{upperCase(label)}</Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;
