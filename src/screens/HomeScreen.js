import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={style.textCenter}>
            <Text style={style.title}>Consumo de Hoy</Text>
            <Image style={style.img} source={require('../../assets/placeholder-water.png')}></Image>
            <Text style={style.title}>Consumo General</Text>
            <View style={style.card}>
               <Text style={style.subtitle}>Su consumo bajó <Text style={style.highlighted}>2%</Text></Text>
               <Text>¡Usaste <Text style={style.highlighted}>19.04 litros</Text> menos que la semana pasada!</Text>
            </View>
            <View style={style.card}>
                <View style={style.row}>
                    <View style={[style.col6, style.textCenter]}>
                        <Text style={style.subtitle}>Semana Pasada</Text>
                        <Text style={style.title}>952 L</Text>
                    </View>
                    <View style={[style.col6, style.textCenter]}>
                        <Text style={[style.subtitle, style.correct]}>Semana Actual</Text>
                        <Text style={style.title}>952 L</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    title: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    highlighted: {
        color: 'steelblue',
        fontWeight: 'bold'
    },
    correct: {
        color: 'green'
    },
    incorrect: {
        color: 'red'
    },
    textCenter: {
        alignItems: 'center'
    },
    img: {
        borderRadius: 50
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        padding: 20,
        marginBottom: 20
    },
    row: {
        flexDirection: 'row'
    },
    col6: {
        flex: 0.5
    }
});

export default HomeScreen;