import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import UsageScreen from '../screens/UsageScreen';
import NutsScreen from '../screens/NutsScreen';

const Tab = createBottomTabNavigator();

const MenuContainer = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (focused, color, size) => {
                    let iconHome = '../../assets/favicon.png';
                    let icon = '../../assets/favicon.png';

                    if (route.name === "Inicio") {
                        return (
                            <Image 
                                style={{
                                    resizeMode: 'contain', 
                                    height:"60%"
                                }} 
                                source={require(iconHome)}
                            >
                            </Image>
                        );
                    }
                    else {
                        return (
                            <Image 
                                style={{
                                    resizeMode: 'contain', 
                                    height:"60%"
                                }} 
                                source={require(icon)}
                            >
                            </Image>
                        );
                    }

                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'grey'
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Uso" component={UsageScreen} />
            <Tab.Screen name="Nuts" component={NutsScreen} />
        </Tab.Navigator>
    );
};

export default MenuContainer;