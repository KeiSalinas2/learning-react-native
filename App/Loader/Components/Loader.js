import React from'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from'react-native'

const Loader = props => (
  <View style = { styles.container }>
    <ActivityIndicator size='large'/>
  </View>
)
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  }
})

export default Loader