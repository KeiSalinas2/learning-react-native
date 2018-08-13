import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Home from './App/Screens/Containers/Home';
import Header from './App/Sections/Components/Header';
import SuggestionList from './App/Videos/Containers/SuggestionList';
import CategoryList from './App/Videos/Containers/CategoryList';
import Loader from"./App/Loader/Components/Loader";
import API from './App/Utils/Api/Api';
import Player from './App/Player/Containers/Player';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Store, Persistor } from './App/Redux/Store';

type Props = {};

export default class App extends Component<Props> {

  async componentDidMount() {

    const categoryList = await API.getMovies();
    Store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getSuggestion(10);
    Store.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })

  }

  render() {
    return (
      <Provider
        store={Store}
      >
         <PersistGate
          loading={<Loader />}
          persistor={Persistor}
        >
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}