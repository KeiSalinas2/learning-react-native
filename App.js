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
import Video from 'react-native-video';
type Props = {};

export default class App extends Component<Props> {

  state = {
    suggestionList: [],
    categoryList: [],
    loading: true
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
      loading: false
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <View
          style={{
            flex: 1,
            height: 100,
          }}
        >
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="contain"
          />
        </View>
        <CategoryList
          list={this.state.categoryList}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <SuggestionList list={this.state.suggestionList} />
        )}
      </Home>
    );
  }
}