import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import AndroidToast from '../modules/AndroidToastModule'

class Sample extends Component { 
  _press() {
    AndroidToast.show('使用原生模块包装的Toast', AndroidToast.SHORT);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._press}>
        <Text style={styles.welcome}>Toast模块</Text>
      </TouchableOpacity>
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
