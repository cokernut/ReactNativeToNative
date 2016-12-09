import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import Toast from '../modules/Toast'

class Sample extends Component { 

  _press() {
    Toast.show('使用原生模块包装的Toast', Toast.SHORT);
  }

  render() {  
    console.log("Toast");
    return (
      <TouchableOpacity onPress={this._press}>
        <Text>Toast</Text>
        <Text>Toast</Text>
      </TouchableOpacity>
    );
  }

}

export default Sample;
