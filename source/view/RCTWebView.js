import React, { PropTypes, Component } from 'react';
import { requireNativeComponent, View} from 'react-native';

class MyWebView extends Component {  
  constructor() {  
    super();  
    this._onChange = this._onChange.bind(this);  
  }  
  _onChange(event) {  
    if (!this.props.onScrollChange) {  
      return;  
    }  
    this.props.onScrollChange({ScrollX:event.nativeEvent. ScrollX,ScrollY:event.nativeEvent.ScrollY});  
  }  
  render() {  
    return <RCTWebView {...this.props} onChange={this._onChange} />;  
  }  
}  

MyWebView.propTypes = {  
    url: React.PropTypes.string,  
    html: React.PropTypes.string,  
    onScrollChange: React.PropTypes.func, 
    ...View.propTypes, //包含默认的View的属性，如果没有这句会报‘has no propType for native prop’错误
};  

export default requireNativeComponent('RCTWebView', MyWebView, {
  nativeOnly: {onChange: true}
});