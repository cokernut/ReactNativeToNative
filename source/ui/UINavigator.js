import React, { Component } from 'react';
import { Navigator } from 'react-native';

import UIRoot from './UIRoot'

export default class UINavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      user: null,
    };
  }
  
  render() {
    let defaultName = 'UIRoot';
    let defaultComponent = UIRoot;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}  
        configureScene={(route) => { //跳转动画
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => { 
          let Component = route.component;
          // 这里有个 { ...route.params }，这个语法是把 routes.params 里的每个key 作为props的一个属性
          return <Component {...route.params} navigator={navigator}/>
        }}
      />
    );
  }
}