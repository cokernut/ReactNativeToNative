// import React, { Component } from 'react';
// import {
//   ScrollView,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   PixelRatio
// } from 'react-native';

// import Sample from './View'

// import ToastSample from './ToastSample'

// import TextViewSample from './TextViewSample'

// import WebViewSample from './WebViewSample'

// //import RCTWebViewSample from './RCTWebViewSample'

// class UIRoot extends Component {
//    constructor(props, context) {
//     super(props, context);
//     this.state = { };
//     this._press = this._press.bind(this);
//   }

//   _press(name, component) {
//     let _this = this;
//     const { navigator } = this.props;
//     //为什么这里可以取得 props.navigator?请注意Navigator.js中:
//     //<Component {...route.params} navigator={navigator} />
//     //这里传递了navigator作为props
//     if (navigator) {
//       // 入栈~ 把SecondPageComponent页面push进栈，接着跳转到SecondPageComponent
//       navigator.push({
//         name: name,
//         component: component,
//       })
//     }
//   }

//   render() {
//     return(
//       <ScrollView style={styles.scrollView} >
//         <TouchableOpacity style={styles.row} onPress={this._press('Sample', Sample)}>
//           <Text style={styles.rowText}>Text</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.row} onPress={this._press('ToastSample', ToastSample)}>
//           <Text style={styles.rowText}>Text</Text>
//         </TouchableOpacity>
//       </ScrollView>  
//     )
//   }
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     marginTop: 64
//   },
//   row: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1 / PixelRatio.get(),
//     borderBottomColor: '#CDCDCD',
//   },
//   rowText: {
//     fontSize: 17,
//   },
//   buttonText: {
//     fontSize: 17,
//     fontWeight: '500',
//   },
// });

// export default UIRoot;


import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  PixelRatio
} from 'react-native';

//import Sample from './View'

//import Sample from './ToastSample'

//import Sample from './TextViewSample'

import Sample from './WebViewSample'

//import Sample from './RCTWebViewSample'

class UIRoot extends Component {

  render() {
    return(
      <Sample/>
    )
  }
}


export default UIRoot;