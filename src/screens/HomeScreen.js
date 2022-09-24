import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Image source={require('../../assets/favicon.png')}></Image>
        </View>
    );
};

export default HomeScreen;