import React, { useState } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, Text, NativeModules } from 'react-native';

const Settings = () => {
  const [serviceKey, setSerivceKey] = useState('');

  if (Platform.OS === 'ios') {
    NativeModules.ServiceKey.getServiceKey(pListServiceKey => {
      setSerivceKey(pListServiceKey);
    });
  } else if (Platform.OS === 'android') {
  }

  return (
    <SafeAreaView>
      <Text>{'Service Key: ' + serviceKey}</Text>
    </SafeAreaView>
  );
};

export default Settings;
