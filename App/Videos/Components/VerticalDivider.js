import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

function VerticalDivider(props) {
  return (
    <View style={[
      styles.separator,
      {
        borderTopColor: (props.color) ? props.color : '#eaeaea'
      }
    ]}>
      <Text>esto es un separador</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  }
})

export default VerticalDivider