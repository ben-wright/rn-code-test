package com.rncodetest;
import android.widget.Toast;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


public class ServiceKey extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    public ServiceKey(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void getServiceKey(Callback callback) {
        String serviceKey = reactContext.getResources().getString(R.string.service_key);
        callback.invoke(serviceKey);
    }

    @ReactMethod
    public void getReleaseServiceKey(Callback callback) {
        String serviceKey = reactContext.getResources().getString(R.string.release_service_key);
        callback.invoke(serviceKey);
    }

    @Override
    public String getName() {
        return "ServiceKey";
    }
}