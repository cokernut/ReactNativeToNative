import React from 'react';
import {
  View,
  Navigator
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class Sample extends React.Component {
  render() {
    let defaultName = 'FirstPageComponent';
    let defaultComponent = FirstPageComponent;
    return (
      <Navigator
        initialRoute={{ name: defaultName, component: defaultComponent }}
        configureScene={(route) => { // 跳转动画
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          // 这里有个 { ...route.params }，这个语法是把 routes.params 里的每个key 作为props的一个属性
          return <Component {...route.params} navigator={navigator} />
        }} 
      />
    );
  }
} 