import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';

import Home from './Screens/Containers/Home';
import Movie from './Screens/Containers/Movie';
import Header from './Sections/Components/Header';
import SuggestionList from './Videos/Containers/SuggestionList';
import CategoryList from './Videos/Containers/CategoryList';
import Loader from"./Loader/Components/Loader";
import API from './Utils/Api/Api';
import Player from './Player/Containers/Player';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie,
  }
}

export default connect(mapStateToProps) (AppLayout);