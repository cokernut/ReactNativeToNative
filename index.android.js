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

/**
 * 进阶

import Advance from './source/advance/Advance';

export default class Root extends Component {
  render() {
    return (
      <Advance />
    )
  }
}
*/

// import UINavigator from './source/ui/UINavigator';

// export default class Root extends Component {
//   // componentWillMount() {
//   //   if (Platform.OS === 'android') {
//   //     BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
//   //   }
//   // }
  
//   // componentWillUnmount() {
//   //   if (Platform.OS === 'android') {
//   //     BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
//   //   }
//   // }

//   // onBackAndroid() {
//   //   const nav = this.navigator;
//   //   const routers = nav.getCurrentRoutes();
//   //   if (routers.length > 1) {
//   //     nav.pop();
//   //     return true;
//   //   }
//   //   return false;
//   // }

//   render() {
//     return (
//       <UINavigator />
//     )
//   }
// }
import UIRoot from './source/ui/UIRoot';

export default class Root extends Component {
  render() {
    return (
      <UIRoot />
    )
  }
}

AppRegistry.registerComponent('ReactNativeView', () => Root);