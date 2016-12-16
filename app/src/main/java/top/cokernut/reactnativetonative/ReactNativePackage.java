package top.cokernut.reactnativetonative;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

import top.cokernut.reactnativetonative.modules.ToastModule;
import top.cokernut.reactnativetonative.reactview.RCTWebViewManager;
import top.cokernut.reactnativetonative.reactview.TextViewManager;
import top.cokernut.reactnativetonative.reactview.WebViewManager;

public class ReactNativePackage implements ReactPackage {

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
    return Collections.emptyList();
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    List<ViewManager> views = new ArrayList<>();
    views.add(new TextViewManager());
    views.add(new WebViewManager());
    views.add(new RCTWebViewManager());
    return views;
  }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ToastModule(reactContext));
    return modules;
  }
}