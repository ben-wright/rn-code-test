import React, { useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, Text, NativeModules } from 'react-native';

const Settings = () => {
  const [serviceKey, setSerivceKey] = useState('');

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    NativeModules.ServiceKey.getServiceKey(serviceKeyFromNative => {
      setSerivceKey(serviceKeyFromNative);
    });
  }

  return (
    <SafeAreaView>
      <Text>{'Service Key: ' + serviceKey}</Text>
    </SafeAreaView>
  );
};

export default Settings;
