package top.cokernut.reactnativetonative.reactview;

import android.content.Context;
import android.util.AttributeSet;
import android.webkit.WebView;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by Admin on 2016/12/15.
 */

public class RCTWebView extends WebView {

    public RCTWebView(Context context) {
        super(context);
    }

    public RCTWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public RCTWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    protected void onScrollChanged(int l, int t, int oldl, int oldt) {
        super.onScrollChanged(l, t, oldl, oldt);
        WritableMap event = Arguments.createMap();
        event.putInt("ScrollX", l);
        event.putInt("ScrollY", t);
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(), "topChange", event);
    }
}
