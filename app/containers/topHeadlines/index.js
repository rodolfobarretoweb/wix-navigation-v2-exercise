import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../actions/news';

class TopHeadlines extends PureComponent {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }

  render() {
    return <Text>Top headlines</Text>;
  }
}

export default connect(state => ({
  list: state.news.list
}), { fetchTopHeadlines })(TopHeadlines);
