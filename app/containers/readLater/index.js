import React, { PureComponent } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchReadLaterList } from '../../actions/news';
import Item from './item';
import Style from './style';

class ReadLater extends PureComponent {
  componentDidMount() {
    this.props.fetchReadLaterList();
  }

  keyExtractor = (_, index) => index.toString();
  renderItem = ({ item }) => <Item data={item}/>;

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
  list: state.news.readLaterList
}), { fetchReadLaterList })(ReadLater);
