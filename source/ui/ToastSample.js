import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import AndroidToast from '../modules/AndroidToast'

class Sample extends Component { 
  constructor(props) {
    super(props);
    this.state = {};
    this._pressPromise = this._pressPromise.bind(this);
  }

  _press() {
    //调用原生端写的show（@ReactMethod注解的方法）方法，并把需要的值传过去
    AndroidToast.show('使用原生模块包装的Toast 回调', AndroidToast.SHORT, 
      (msg, str, num) => { //回调函数，为了试验传值，所以这里是先把n传到原生端，在原生端接收到之后当作次数（num）传回到JavaScript端接收
        console.log(msg + str + num);
      });
  }

  async run() {
    var {
      name,
      age
    } = await AndroidToast.showTwo('使用原生模块包装的Toast Promise', AndroidToast.SHORT); //调用原生端写的show（@ReactMethod注解的方法）方法，并把需要的值传过去
    console.log('name' + ':' + name + '\n' + 'age' + ':' + age);
  }

  _pressPromise() {
    this.run();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch} onPress={this._press}>
          <Text style={styles.text}>Toast模块回调传值</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touch} onPress={this._pressPromise}>
          <Text style={styles.text}>Toast模块Promise传值</Text>
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
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  }
});
export default Sample;
