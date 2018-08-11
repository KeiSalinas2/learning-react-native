import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import Home from './App/Screens/Containers/Home';
import Header from './App/Sections/Components/Header';
import SuggestionList from './App/Videos/Containers/SuggestionList';
import API from './App/Utils/Api/Api';

type Props = {};
type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
  }
  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    console.log(movies);
    this.setState({
      suggestionList: movies,
    })
  }
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorías</Text>
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
}