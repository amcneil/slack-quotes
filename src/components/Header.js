import React from 'react';
import { Header } from 'react-native-elements'

const CustomHeader = () => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    outerContainerStyles={{ backgroundColor: '#3D6DCC', width: '100%' }}
  />
);

export default CustomHeader;