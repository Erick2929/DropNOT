import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

import Styles from '../styles/Styles';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[Styles.main, Styles.textCenter, {paddingTop: 10}]}>
                    <Text style={Styles.title}>Consumo de Hoy</Text>
                    {/* Widget BEGIN */}
                    <Image 
                        source={require('../../assets/placeholder-water.png')}
                        style={style.tempImg}
                    ></Image>
                    {/* Widget END */}
                    {/* Alerta BEGIN */}
                    <View style={Styles.alert}>
                        <View style={Styles.row}>
                            <View style={Styles.col2}>
                                <Image 
                                    source={require('../../assets/placeholder-warning.png')}
                                    style={style.iconWarning}
                                ></Image>
                            </View>
                            <View style={Styles.col9}>
                                <Text>
                                    Alerta: Se ha detectado que el nut 
                                    <Text style={Styles.highlighted}> Lavabo Cocina </Text> 
                                    ha permanecido abierto por un periodo prolongado.
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Alerta END */}
                    <Text style={Styles.title}>Consumo General</Text>
                    {/* Consumo BEGIN */}
                    <View style={Styles.card}>
                        <Text style={Styles.subtitle}>Su consumo bajó <Text style={Styles.highlighted}>14.56%</Text></Text>
                        <Text>¡Usaste <Text style={Styles.highlighted}>159.04 litros</Text> menos que la semana pasada!</Text>
                    </View>
                    {/* Consumo END */}
                    {/* Semanal BEGIN */}
                    <View style={Styles.card}>
                        <View style={Styles.row}>
                            <View style={[Styles.col6, Styles.textCenter]}>
                                <Text style={Styles.subtitle}>Semana Pasada</Text>
                                <Text style={Styles.title}>1092 L</Text>
                            </View>
                            <View style={[Styles.col6, Styles.textCenter]}>
                                <Text style={[Styles.subtitle, Styles.correct]}>Semana Actual</Text>
                                <Text style={Styles.title}>932.96 L</Text>
                            </View>
                        </View>
                    </View>
                    {/* Semanal END */}
                    {/* Información Relevante BEGIN */}
                    <Text style={Styles.title}>Información Relevante</Text>
                    <View style={Styles.card}>
                        <Text style={Styles.title}>136 Litros</Text>
                        <Text>
                            El consumo de agua en los hogares varía enormemente 
                            según el número de personas que hayan en casa, y sus 
                            necesidades personales. Una persona consume una 
                            media de 136 litros por día. Todos los días se 
                            pierden 112 litros por propiedad, por fugas.
                        </Text>
                    </View>
                    {/* Información Relevante END */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    iconWarning: {
        width: '50%',
        marginHorizontal: 10,
        alignSelf: 'flex-end',
        resizeMode: 'contain',
    },
    tempImg: {
        borderRadius: 50,
    }
});

export default HomeScreen;