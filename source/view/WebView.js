import { PropTypes } from 'react';
import { requireNativeComponent, View} from 'react-native';

let iface = {
  name: 'WebView',
  propTypes: {
    url: PropTypes.string,
    html: PropTypes.string,
    ...View.propTypes, //包含默认的View的属性，如果没有这句会报‘has no propType for native prop’错误
  },
};

export default requireNativeComponent('WebView', iface);