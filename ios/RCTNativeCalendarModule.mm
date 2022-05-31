//
//  NativeCalendarModule.m
//  turbocalendar
//
//  Created by Tarandeep Singh on 28/05/22.
//

#import "RCTNativeCalendarModule.h"
#import <NativeCalendarModule/NativeCalendarModule.h>

@implementation RCTNativeCalendarModule
+ (NSString *)moduleName {
  return @"NativeCalendarModule";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeCalendarModuleSpecJSI>(params);
}

- (NSString *)getMessage {
  return @"Hi i'm a calendar module developed using JSI technology";
}
@end
