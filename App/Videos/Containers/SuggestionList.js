import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import Layout from '../Components/SuggestionListLayout';
import Empty from '../Components/Empty';
import Divider from '../Components/VerticalDivider';
import Suggestion from '../Components/Suggestion';

import { connect } from 'react-redux';

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Divider />
  viewMovie = (item) => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item,
      }
    })
  }
  renderItem = ({item}) => {
    return (
      <Suggestion
        {...item}
        onPress={()=> { this.viewMovie(item) }}
      />
    )
  }
  render() {

    return (
      <Layout
        title="Recomendado para ti"
        >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.suggestionList
  }
}

export default connect (mapStateToProps) (SuggestionList);