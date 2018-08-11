import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

function HorizontalDivider(props) {
  return (
     <View
      style={styles.divider}
     />
  )
}

const styles = {
  divider: {
    flex: 1,
    marginHorizontal: 5,
  }
}


export default HorizontalDivider