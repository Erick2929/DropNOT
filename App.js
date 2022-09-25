import React from 'react';
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';

import MenuContainer from './src/navigation/MenuContainer';

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <MenuContainer />
    </NavigationContainer>
  );
}