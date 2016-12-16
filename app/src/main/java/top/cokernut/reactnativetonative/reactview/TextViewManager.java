package top.cokernut.reactnativetonative.reactview;

import android.util.Log;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * TextView管理类
 */
public class TextViewManager extends SimpleViewManager<TextView> {
    public static final String REACT_VIEW = "TextView";

    /**
     * @return 返回的名字会用于在JavaScript端引用这个原生视图类型。
     */
    @Override
    public String getName() {
        return REACT_VIEW;
    }

    /**
     * 创建视图，且应当把自己初始化为默认的状态。所有属性的设置都通过后续的updateView来进行。
     */
    @Override
    public TextView createViewInstance(ThemedReactContext reactContext) {
        return new TextView(reactContext);
    }

    /**
     * 要导出给JavaScript使用的属性，需要申明带有@ReactProp（或@ReactPropGroup）注解的设置方法。
     * 方法的第一个参数是要修改属性的视图实例，第二个参数是要设置的属性值。
     * 方法的返回值类型必须为void，而且访问控制必须被声明为public。
     * @param view 要修改属性的视图实例
     * @param text 要设置的属性值
     *
     * 注意@ReactProp注解必须包含一个字符串类型的参数name。这个参数指定了对应属性在JavaScript端的名字。
     * 除了name，@ReactProp注解还接受这些可选的参数：defaultBoolean, defaultInt, defaultFloat。
     * 这些参数必须是对应的基础类型的值（也就是boolean, int, float），这些值会被传递给setter方法，
     * 以免JavaScript端某些情况下在组件中移除了对应的属性。
     */
    @ReactProp(name = "text")
    public void setText(TextView view, String text) {
        Log.d("============", "设置text");
        view.setText(text);
    }

    @ReactProp(name = "textSize", defaultFloat = 20f)
    public void setTextSize(TextView view, float size) {
        view.setTextSize(size);
    }

    @ReactProp(name = "textColor", defaultInt = 0x000000)
    public void setTextColor(TextView view, int color) {
        view.setTextColor(color);
    }
}
