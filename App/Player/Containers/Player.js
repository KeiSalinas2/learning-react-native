import React, { Component } from 'react';
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native';

import ControlLayout from '../Components/ControlLayout';
import PlayPause from '../Components/PlayPause';
import ProgressBar from '../Components/ProgressBar';
import TimeLeft from '../Components/TimeLeft';
import FullScreen from '../Components/FullScreen';
import Layout from '../Components/Layout';

import Helpers from './../../Utils/Services/Helpers';

class Player extends Component {

  state = {
    loading: true,
    paused: false,
    progress: 0,
    currentTime: '0:00',
    duration: 0,
    changeActive: false,
    fullscreen: false,
  }

  onLoad = () => {
    this.setState({
      loading: false,
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    })
  }

  setTime = payload => {

    let currentTime = Helpers.getVideoTime(payload.currentTime)

    this.setState({
      currentTime: currentTime,
      progress: (payload.currentTime / payload.seekableDuration ),
      duration: payload.seekableDuration,
    })
  }

  changeSliderStarted = (value) => {
    this.setState({
      progress: value,
      changeActive: true,
    })
  }

  changeSliderFinished = (value) => {
    this.setState({
      changeActive: false,
    })
    this.player.seek(this.state.duration * value)
  }

  setFullScreenPromise = () => {
    return new Promise((resolve, reject) => {
      resolve(this.setState({
        fullscreen: !this.state.fullscreen
      }))
    }).catch(error => console.error(error))
  }

  fullScreen = event => {
    this.setFullScreenPromise()
      .then(() => {

        if(this.state.fullscreen)
          this.player.presentFullscreenPlayer();
        else
          this.player.dismissFullscreenPlayer();

      });
  }

  render() {
    return (
      <Layout
      loading={this.state.loading}
      video={
        <Video
          ref={ (ref) => { this.player = ref } }
          source={ { uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' } }
          style={styles.video}
          resizeMode='contain'
          onLoad={this.onLoad}
          paused={ this.state.changeActive ? true : this.state.paused }
          onProgress={this.setTime}
        />
      }
      loader={
        <ActivityIndicator color="white"/>
      }
      controls={
        <ControlLayout>
          <PlayPause
            onPress={this.playPause}
            paused={this.state.paused}
          />
          <ProgressBar
            progress={this.state.progress}
            onChangeStarted={this.changeSliderStarted}
            onChangeFinished={this.changeSliderFinished}
          />
          <TimeLeft
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          <FullScreen
            onPress={this.fullScreen}
          />
        </ControlLayout>
      }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player;