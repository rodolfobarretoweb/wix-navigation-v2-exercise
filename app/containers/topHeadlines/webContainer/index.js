import React, { PureComponent } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import Style from './style';

class WebContainer extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if(buttonId === 'topHeadlinesWebContainerBackButton') {
      Navigation.dismissModal('topHeadlinesWebContainer');
    }
  }

  render() {
    return (
      <WebView startInLoadingState
        style={Style.container}
        source={{ uri: this.props.url }}
      />
    );
  }
}

WebContainer.propTypes = {
  url: PropTypes.string.isRequired
};

export default WebContainer;
