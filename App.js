import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MenuContainer from './src/navigation/MenuContainer';

export default function App() {
  return (
    <NavigationContainer>
      <MenuContainer />
    </NavigationContainer>
  );
}