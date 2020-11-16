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
  NSString* serviceKey = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"SERVICE_KEY"];
  callback(@[serviceKey]);
}

RCT_EXPORT_METHOD(getReleaseServiceKey:(RCTResponseSenderBlock)callback)
{
  NSString* serviceKey = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"RELEASE_SERVICE_KEY"];
  callback(@[serviceKey]);
}

@end
