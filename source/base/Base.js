import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ListView,
  Navigator
} from 'react-native';

import MyScene from './MyScene';
/**
 * props:属性
 * state:状态
 */
/**
class MyTextView extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true}; //初始化state（状态）
    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
        this.setState({showText: !this.state.showText}) //调用setState方法修改state的值
    }, 10000);
  }
  render() {
    let temp = 'Name: ' + this.props.name + '  Age: ' + this.props.age + '!'; //取属性值并拼装
    let text = this.state.showText ? temp : ''; 
    return (
      <Text style={styles.text}>{text}</Text>
    );
  }
}*/
/**
class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
    let pic={
      uri:'http://file26.mafengwo.net/M00/25/15/wKgB4lIre0yAC1WOAAFKo9uhzX063.rbook_comment.w300.jpeg'
    }

    return (
      
       * props,state,style
       * 
       * style属性可以是一个普通的JavaScript对象,
       * 你可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
       * 常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
       * 
       * 传值到Image的source属性，并定义样式
       * 属性传值，this.props.propsname调用
       */
      /* 
      <View>
        <Text style={[styles.text, styles.gray, {fontSize: 30}]}>Hello World!</Text>
        <Image source={pic} style={{width:100, height:100}}></Image>
        <MyTextView name='Tom' age='16'/> 
        <MyTextView name='Joy' age='18'/>
      </View>
      */
      /** 
       * 布局
       * 
       * 指定宽高：
       * 最简单的给组件设定尺寸的方式就是在样式中指定固定的width和height。
       * React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
       * 
       * 弹性（Flex）宽高：
       * 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex:1来指定某个组件扩张以撑满所有剩余的空间。
       * 如果有多个并列的子组件使用了flex:1，则这些子组件会平分父容器中剩余的空间。如果这些并列的子组件的flex值不一样，则谁的值更大，
       * 谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。
       * 注意：
       * 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，
       * 也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
       * 
       * Flexbox布局：
       容器属性：
       * flexDirection: 决定布局的主轴, 默认值是column(竖直轴,起点在顶部)而不是row(水平轴,起点在左端)
       * alignItems: 默认值是stretch
            flex-start: 交叉轴的起点对齐
            flex-end: 交叉轴的终点对齐
            center: 交叉轴的中心对齐
            stretch: 容器中的所有项目拉伸填满整个容器
       * justifyContent: 可以决定其子元素沿着主轴的排列方式,默认值是flex-start
            flex-start：主轴起点对齐
            flex-end：主轴终点
            center：居中
            space-between：两端对齐，项目之间的间隔都相等
            space-around: 每个项目两侧的间隔相等。项目之间的间隔比项目与边框的间隔大一倍。
       * flexWrap: lexWrap属性定义一条轴线排不下时是否折行。它有两个值，分别是’wrap’和’nowrap’，分别代表支持换行和不支持换行，默认是’nowrap’。
       * flex: 只能指定一个数字值。
       *
      */
      /** 
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
*/
/** TextInput
class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          // 如果你还不了解ES6中的新语法，那么简单讲解一下上面那一句
          // 如果key和value的字面一样，那么可以简写成一个，等同于下面的写法：
          // this.setState({text: text});
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}
*/
/**ListView 
class Base extends Component {
   constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
*/
/** 
const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold'
  },
  gray: {
    color: 'gray'
  },
  layout: {

  },
  view: {

  }
});
*/

//Navigator
class Base extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // 调用这个函数显示一个新的场景              
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // 调用这个函数回到当前场景
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

export default Base;