import React, {Component} from 'react';
import {
  View,
  Text,
  NavigationExperimental,
  PixelRatio,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

//解构NavigationCardStack和 NavigationStateUtils这两个子组件
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class TappableRow extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

class MyVeryComplexScene extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={styles.row}>
          路由: {this.props.route.key}
        </Text>
        <TappableRow
          text="加载下一个场景"
          onPress={this.props.onPushRoute}
          />
        <TappableRow
          text="返回上一个场景"
          onPress={this.props.onPopRoute}
          />
      </ScrollView>
    );
  }
}

class MyVerySampleNavigator extends Component {
  // 在这里绑定一些导航用的方法
  constructor(props, context) {
    super(props, context);
    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
    this._renderScene = this._renderScene.bind(this);
  }
  // 现在我们终于可以使用“NavigationCardStack”来渲染场景。
  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }
  // 根据路由来渲染场景
  // `sceneProps`的具体结构定义在`NavigationTypeDefinition`的`NavigationSceneRendererProps`中
  // 这里你可以根据路由的不同来返回不同的场景组件，我们这里为了简要说明，始终只返回这一个场景组件
  _renderScene(sceneProps) {
    return (
      <MyVeryComplexScene
        route={sceneProps.scene.route}
        onPushRoute={this._onPushRoute}
        onPopRoute={this._onPopRoute}
        onExit={this.props.onExit}
      />
    );
  }
}

export default class Sample extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // 定义初始的导航状态
      navigationState: {
        index: 0, // 现在是第一页（索引从0开始）
        routes: [{ key: '最初的场景' }], // 初始仅设定一个路由
      },
    };
    this._onNavigationChange = this._onNavigationChange.bind(this);
  }

  _onNavigationChange(type) {
    // 从state中解构出navigationState
    let {navigationState} = this.state;
    switch (type) {
      case 'push':
        // push一个新路由，在这里就是一个带有key属性的对象。
        // key必须要确保唯一性
        const route = { key: 'Route-' + Date.now() };
        // 调用NavigationStateUtils提供的push规约函数
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;
      case 'pop':
        // 使用pop函数来弹出当前路由
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }
    // 如果没有实际变化，则NavigationStateUtils会返回同样的`navigationState`
    // 我们只会更新确实发生变化的状态
    if (this.state.navigationState !== navigationState) {
      // 请记住更新状态必须通过setState()方法！
      this.setState({ navigationState });
      // 如果你还不了解ES6中的新语法，那么简单讲解一下上面那一句
      // 如果key和value的字面一样，那么可以简写成一个，等同于下面的写法：
      // this.setState({navigationState: navigationState});
    }
  }
  _exit() {
    //exit()实现
  }
  render() {
    return (
      <MyVerySampleNavigator
        navigationState={this.state.navigationState}
        onNavigationChange={this._onNavigationChange}
        onExit={this._exit}
      />
    );
  }
} 

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  scrollView: {
    marginTop: 64
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});