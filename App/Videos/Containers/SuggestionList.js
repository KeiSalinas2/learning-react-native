import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../Components/SuggestionListLayout';
import Empty from '../Components/Empty';
import Divider from '../Components/VerticalDivider';
import Suggestion from '../Components/Suggestion';

class SuggestionList extends Component {
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Divider />
  renderItem = ({item}) => {
    return (
      <Suggestion {...item}/>
    )
  }
  render() {
    const list = [
      {
        title: 'Avengers',
        key: '1',
      },
      {
        title: 'Pokemon',
        key: '2'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default SuggestionList