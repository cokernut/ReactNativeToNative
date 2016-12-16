import React, { Component } from 'react';
import {} from 'react-native'

import WebView from '../view/WebView'

class Sample extends Component {
  render() {
    return (
      <WebView url="https://www.baidu.com" style={{width:200,height:400}}></WebView>
    );
  }
}

export default Sample;
