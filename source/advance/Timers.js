import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Sample extends Component {
  componentDidMount() {
    this.timer = setTimeout(
      () => { console.log('把一个定时器的引用挂在this上'); },  //2000毫秒之后打印log
      2000
    );
  }
  componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View>
        <Text>Timer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#F67FF8',
  }
});

export default Sample;