import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Sample extends Component {
  _click() {
    console.log("Click!");
  }

  _longClick() {
    console.log("Long Click!");
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._click} onLongPress={this._longClick}>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
            style={[styles.image, { width: 200, height: 200 }]} >
            <Text style={styles.text}>背景图片</Text>
          </Image>
          <Image source={require('../img/img.jpg')} />
        </TouchableOpacity>
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