import React from 'react';
import {
  View,
  Navigator,
  Text,
  TouchableOpacity
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

const USER_MODELS = {
  1: { name: '小李', age: 18 },
  2: { name: '小明', age: 20 }
};

export default class SecondPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }
  componentDidMount() {
    //这里获取从FirstPageComponent传递过来的参数: id
    this.setState({
      id: this.props.id
    });
  }
  _pressButton() {
    const { navigator } = this.props;
    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    //出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
    if (navigator) {
      navigator.pop();
    }
  }
  
  render() {
    return (
      <View>
        <Text>获得的参数(id): id={this.state.id}</Text>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳回去</Text>
        </TouchableOpacity>
      </View>
    );
  }
}