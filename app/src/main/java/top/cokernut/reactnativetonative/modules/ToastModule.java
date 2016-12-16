package top.cokernut.reactnativetonative.modules;

import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.HashMap;
import java.util.Map;

/**
 * ToastModule原生模块
 */
public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  /**
   * @return 返回一个字符串名字，这个名字在JavaScript端标记这个模块,这里我们把这个模块叫做AndroidToast，
   * 这样就可以在JavaScript中通过React.NativeModules.AndroidToast访问到这个模块
   *
   * 注意：React Native已经内置了一个名为ToastAndroid的模块,名字不能返回ToastAndroid，否则运行会报错
   */
  @Override
  public String getName() {
    return "AndroidToast";
  }

  /**
   * @return 返回了需要导出给JavaScript使用的常量, 比如：AndroidToast.show('使用原生模块包装的Toast', AndroidToast.SHORT);
   * 中的AndroidToast.SHORT，SHORT对应的是常量DURATION_SHORT_KEY的值"SHORT",在原生端得到的值为Toast.LENGTH_SHORT这个常量的值0
   */
  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  /**
   * 导出给JavaScript使用的方法，Java方法需要使用注解@ReactMethod。方法的返回类型必须为void。
   * 调用如：AndroidToast.show('使用原生模块包装的Toast', AndroidToast.SHORT, (msg, str, num) => {console.log(msg + str + num);}););
   * @param message 显示内容
   * @param duration 显示时间参数
   * @param callback 回调函数
   */
  @ReactMethod
  public void show(String message, int duration, Callback callback) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
    callback.invoke(message, "调用成功", 123); //调用回调函数
  }

  /**
   * 导出给JavaScript使用的方法，Java方法需要使用注解@ReactMethod。方法的返回类型必须为void。
   * 调用如：AndroidToast.show('使用原生模块包装的Toast', AndroidToast.SHORT);
   * @param message 显示内容
   * @param duration 显示时间参数
   * @param promise Promise
   */
  @ReactMethod
  public void showTwo(String message, int duration, Promise promise) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
    WritableMap map = Arguments.createMap();
    map.putString("name", "Tom");
    map.putInt("age", 20);
    promise.resolve(map);
  }
}