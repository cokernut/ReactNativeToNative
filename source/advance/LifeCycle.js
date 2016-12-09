import React, { Component } from 'react';
import {
  View
} from 'react-native'

class Sample extends Component { 

  getInitalState() {  //组件示例创建的时候调用的第一个函数。主要用于初始化state。注意：为了在使用中不出现空值，建议初始化state的时候尽可能给每一个可能用到的值都赋一个初始值。
    console.log("getInitalState");
  }

  componentWillMount() {  //准备加载组件，会调用 componentWillMount()，这个函数调用时机是在组件创建，并初始化了状态之后，在第一次绘制 render() 之前。可以在这里做一些业务初始化操作，也可以设置组件状态。这个函数在整个生命周期中只被调用一次。
    console.log("componentWillMount");
  }

  render() {  //组件渲染函数，会返回一个Virtual DOM，只允许返回一个最外层容器组件。render函数尽量保持纯净，只渲染组件，不修改状态，不执行副操作（比如计时器）
    console.log("render");
    return (
      <View></View>
    );
  }

  componentDidMount() {  //在render渲染之后，React会根据Virtual DOM来生成真实DOM，生成完毕后会调用该函数。主要在该函数中执行网络请求，定时器开启等相关操作
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) { //props改变时调用
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) { //如果 true 表示需要更新，继续走后面的更新流程。否者，则不更新，直接进入等待状态，默认true，可以根据传递过来的props和state来选择更新或者不更新，从而提高效率。
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) { //组件上会接收到新的props或者state渲染之前，调用该方法。但是不可以在该方法中更新state和props
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) { //和初始化时期的componentDidMount类似，在render之后，真实DOM生成之后调用该函数。
    console.log("componentWillUpdate");
  }

  componentWillUnmount() {  //组件DOM中移除的时候调用。在这里进行一些相关的销毁操作，比如定时器，监听等等。
    console.log("componentWillUnmount");
  }
}

export default Sample;