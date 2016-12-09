import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Sample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native组件</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65A35F',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  }
});

export default Sample;