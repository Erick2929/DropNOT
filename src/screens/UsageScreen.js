import React from 'react';
import { View, Text, Image } from 'react-native';

const UsageScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Usage</Text>
            <Image source={require('../../assets/favicon.png')}></Image>
        </View>
    );
};

export default UsageScreen;