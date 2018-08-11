import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import Layout from '../Components/Layout';

class Player extends Component{
  state = {
    loading: true,
  }

  onErrorVideo = (error) => {
    console.log(error);
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering,
    })

  }
  render() {
    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode='cover'
            onError={this.onErrorVideo}
            onBuffer={this.onBuffer}
          />
        }
        loader={
          <ActivityIndicator
            color='white'
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  }
})

export default Player