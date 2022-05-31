package com.turbocalendar;

import androidx.annotation.NonNull;

import com.facebook.fbreact.specs.NativeCalendarModuleSpec;
import com.facebook.react.bridge.ReactApplicationContext;

public class NativeCalendarModule extends NativeCalendarModuleSpec {
    public static final String NAME = "NativeCalendarModule";
    public NativeCalendarModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getMessage() {
        return "Hi i'm a calendar module developed using JSI technology.";
    }

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }
}
