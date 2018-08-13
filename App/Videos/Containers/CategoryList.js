import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Empty from '../Components/Empty';
import Separator from '../../Sections/Components/HorizontalDivider';
import Category from '../Components/Category';
import Layout from '../Components/CategoryListLayout';

import { connect } from 'react-redux';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => {
    return (
      <Category {...item}/>
    )
  }
  render() {
    return (
      <Layout
        title="Categorias"
        >
        <FlatList
          horizontal
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
    list: state.categoryList
  }
}

export default connect (mapStateToProps) (CategoryList);