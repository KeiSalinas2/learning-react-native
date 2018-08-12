import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Helpers from './../../Utils/Services/Helpers';


function TimeLeft (props) {

  return (
    <View>
      <Text style={styles.time}>{props.currentTime} / { Helpers.getVideoTime(props.duration) }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    color: 'white',
    fontSize: 11,
  }
})

export default TimeLeft;