import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import TextView from '../view/TextView'

class Sample extends Component {
  _press() {
    console.log(TextView);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={this._press}>
          <TextView text='TextView' textSize={20} textColor={0xffffff} style={{width:200, height:100}}/>
        </TouchableOpacity>
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
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65A35F',
  },
});

export default Sample;
