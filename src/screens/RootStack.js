import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home, Quote } from './index';


const MainStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    }
  },
  {}
);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: MainStack,
    },
    Quote: {
      screen: Quote,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Quote'
  }
);

export default RootStack;