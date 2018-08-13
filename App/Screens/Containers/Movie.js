import React, { Component } from 'react';
import MovieLayout from '../Components/MovieLayout';
import Player from '../../Player/Containers/Player';
import Header from '../../Sections/Components/Header';
import Close from '../../Sections/Components/Close';
import { connect } from 'react-redux';

class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      }
    })
  }
  render() {
    return (
      <MovieLayout>
        <Header>
          <Close
            onPress={this.closeVideo}
          />
        </Header>
        <Player />
      </MovieLayout>
    )
  }
}

export default connect(null)(Movie)