import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Color } from '../styles/Styles';
import HomeScreen from '../screens/HomeScreen';
import UsageScreen from '../screens/UsageScreen';
import NutsScreen from '../screens/NutsScreen';

const Tab = createBottomTabNavigator();

const MenuContainer = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (focused, color, size) => {
                    let iconInicio = '../../assets/placeholder-home.png';
                    let iconNuts = '../../assets/placeholder-logo.png';
                    let iconUso = '../../assets/placeholder-usage.png';
                    let iconDefault = '../../assets/favicon.png';

                    console.log(focused)
                    if (route.name === "Inicio") 
                        return <Image style={[style.icon]} source={require(iconInicio)}></Image>
                    else if (route.name === "Uso")
                        return <Image style={style.icon} source={require(iconUso)}></Image>
                    else if (route.name === "Nuts")
                        return <Image style={style.icon} source={require(iconNuts)}></Image>
                    else
                        return <Image style={style.icon} source={require(iconDefault)}></Image>

                },
                tabBarActiveTintColor: Color.Primary,
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Uso" component={UsageScreen} />
            <Tab.Screen name="Nuts" component={NutsScreen} />
        </Tab.Navigator>
    );
};

const style = StyleSheet.create({
    icon: {
        resizeMode: 'contain', 
        height:"60%"
    },
    iconHighlighted: {
        tintColor: Color.Primary
    }
});

export default MenuContainer;