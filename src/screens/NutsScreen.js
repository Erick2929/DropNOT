import React from 'react';
import { View, Text, Image } from 'react-native';

const NutsScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>My Nuts</Text>
            <Image source={require('../../assets/favicon.png')}></Image>
        </View>
    );
};

export default NutsScreen;