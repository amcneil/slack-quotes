import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home } from './index';


const RootStack = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;