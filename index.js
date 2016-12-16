import React,{Component} from 'react';
import {
  AppRegistry
} from 'react-native';

/**
 * 基础
import Base from './source/base/Base';

export default class Root extends Component {
  render() {
    return (
      <Base />
    )
  }
}
*/


import Advance from './source/advance/Advance';

export default class Root extends Component {
  render() {
    return (
      <Advance />
    )
  }
}

AppRegistry.registerComponent('AdvanceView', () => Root);