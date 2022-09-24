import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import UsageScreen from '../screens/UsageScreen';
import NutsScreen from '../screens/NutsScreen';

const Tab = createBottomTabNavigator();

const MenuContainer = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Usage" component={UsageScreen} />
        <Tab.Screen name="My Nuts" component={NutsScreen} />
      </Tab.Navigator>
    );
  };

export default MenuContainer;