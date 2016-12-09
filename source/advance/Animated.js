import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Easing
} from 'react-native';
/**
 * 弹性动画 ,基础的单次弹跳物理模型
class Sample extends Component {
  _callBack() {
      console.log("call Back");
  }
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render() {
    return (
      <Animated.Image                         // 可选的基本组件类型: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`比例属性
          ]
        }}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
    Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
      this.state.bounceValue,                 // 将`bounceValue`值动画化
      {
        toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
        friction: 2,                          // 弹性系数（摩擦力），用于回弹，数值越大弹性越小，默认7
        tension: 10                           // 张力，默认40。
      }
    ).start(this._callBack);                  // 开始执行动画，并传入回调函数
  }
}
*/
/**
 * 透明度位移动画,以一个初始速度开始并且逐渐减慢停止。

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0.5),
    };
  }
  componentDidMount() {
    Animated.decay(
      this.state.anim,
      { 
        toValue: 2,
        velocity: 0.2, //起始速度，必填参数。
        deceleration: 0.99, //速度衰减比例，默认为0.997。
      },
    ).start();
  }
  render() {
    return (
      <Animated.Image
        source={require('../img/img.jpg')}
        style={{ //把值赋给透明度属性,Animated.Value从0变化到1时，把组件的位置从150px移动到0px，不透明度从0到1
          opacity: this.state.anim, // Binds directly
          transform: [
            {translateY: this.state.anim.interpolate({ //Y轴位移变化
              inputRange: [0, 20],
              outputRange: [0, 400]
            })}
          ],
        }}>
      </Animated.Image>
    );
  }
}
 */
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0), //初始化，value=0
    }
  }

  componentDidMount() {
    Animated.sequence([      //顺序执行
      Animated.timing(      //从时间范围映射到渐变的值
        this.state.anim,
        {
          toValue: 1, //value要从0变为1
          easing: Easing.linear, //变化方式
          duration: 2500, //动画时间，默认500
          delay: 1000 //在一段时间之后开始动画（单位是毫秒），默认为0。
        }
      ),
      Animated.delay(2000), //延迟执行
    ]).start(this._callBack);
  }

  _callBack() {
    console.log("call Back");
  }

  render() {
    return(
      <Animated.Image
        source={require('../img/img.jpg')}
        style={{
          opacity: this.state.anim, //透明度变化
          transform: [
            {scale: this.state.anim.interpolate({ //缩放变化
              inputRange: [0, 1],
              outputRange: [1, 0.5],
            })},
            {translateX: this.state.anim.interpolate({ //X轴位移变化
              inputRange: [0, 1],
              outputRange: [0, 150]
            })},
            {translateY: this.state.anim.interpolate({ //Y轴位移变化
              inputRange: [0, 1],
              outputRange: [0, 150]
            })},
            {translateY: this.state.anim.interpolate({ //Y轴位移变化
              inputRange: [0, 1],
              outputRange: [0, 150]
            })},
            {rotateZ: this.state.anim.interpolate({ //Z轴旋转变化
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })},
            {rotateX: this.state.anim.interpolate({ //X轴旋转变化
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })},
            {rotateY: this.state.anim.interpolate({ //Y轴旋转变化
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })},
          ]
        }}
      />
    );
  }
}
export default Sample;