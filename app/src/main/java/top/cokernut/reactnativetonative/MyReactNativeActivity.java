package top.cokernut.reactnativetonative;

import com.facebook.react.ReactActivity;

public class MyReactNativeActivity extends ReactActivity {

    /**
     * 这里的ReactNativeView对应index.android.js中AppRegistry.registerComponent('ReactNativeView', () => Root)的ReactNativeView
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeView";
    }
}