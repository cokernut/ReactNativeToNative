import React, { Component } from 'react';
import {
  View,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text
 } from 'react-native'

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { w: 100, h: 100 };
    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    // 创建动画
    LayoutAnimation.spring();
  }

  _onPress() {
    // 动画更新，让视图的尺寸变化以动画形式展现
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>点击！</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'red',
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sample;