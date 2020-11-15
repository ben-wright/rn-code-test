//
//  ServiceKey.m
//  RNCodeTest
//
//  Created by Ben on 15/11/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "ServiceKey.h"

@implementation ServiceKey

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getServiceKey:(RCTResponseSenderBlock)callback)
{
  NSString* paramValue = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"SERVICE_KEY"];
  if(paramValue == nil)
    paramValue = @"";
  callback(@[paramValue]);
}

@end
