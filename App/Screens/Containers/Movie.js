import React, { Component } from 'react';
import MovieLayout from '../Components/MovieLayout';
import Player from '../../Player/Containers/Player';
import Header from '../../Sections/Components/Header';

class Movie extends Component {
  render() {
    return (
      <MovieLayout>
        <Header />
        <Player />
      </MovieLayout>
    )
  }
}

export default Movie