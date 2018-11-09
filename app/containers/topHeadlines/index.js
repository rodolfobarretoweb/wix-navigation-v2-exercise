import React, { PureComponent } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchTopHeadlines, saveToReadLater } from '../../actions/news';
import Item from './item';
import Style from './style';

class TopHeadlines extends PureComponent {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }

  keyExtractor = (_, index) => index.toString();
  renderItem = ({ item }) => <Item data={item} onPressReadLater={this.onPressReadLater}/>;

  onPressReadLater = data => {
    this.props.saveToReadLater(data);
  }

  render() {
    return(
      <SafeAreaView style={Style.container}>
        <FlatList
          data={this.props.list}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </SafeAreaView>
    );
  }
}

export default connect(state => ({
  list: state.news.list
}), { fetchTopHeadlines, saveToReadLater })(TopHeadlines);
