import React, { Component } from 'react';
import {} from 'react-native'

import RCTWebView from '../view/RCTWebView'

class Sample extends Component {
  render() {
    return (
       <RCTWebView onScrollChange={this.onWebViewScroll} url="https://www.baidu.com" style={{width:200,height:400}}></RCTWebView>  
    );
  }
}

export default Sample;
