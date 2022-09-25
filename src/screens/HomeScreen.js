import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[style.textCenter, {paddingTop: 10}]}>
                    <Text style={style.title}>Consumo de Hoy</Text>
                    <Image style={style.img} source={require('../../assets/placeholder-water.png')}></Image>
                    {/* Alerta BEGIN */}
                    <View style={style.alert}>
                        <View style={style.row}>
                            <View style={style.col2}>
                                <Image 
                                    source={require('../../assets/placeholder-warning.png')}
                                    style={{
                                        resizeMode: 'contain',
                                        width: '50%',

                                        alignSelf: 'flex-end',
                                        marginHorizontal: 10,
                                    }}
                                ></Image>
                            </View>
                            <View style={style.col9}>
                                <Text>
                                    Alerta: Se ha detectado que el nut 
                                    <Text style={style.highlighted}> Lavabo Cocina </Text> 
                                    ha permanecido abierto por un periodo prolongado.
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* Alerta END */}
                    <Text style={style.title}>Consumo General</Text>
                    {/* Consumo BEGIN */}
                    <View style={style.card}>
                        <Text style={style.subtitle}>Su consumo bajó <Text style={style.highlighted}>14.56%</Text></Text>
                        <Text>¡Usaste <Text style={style.highlighted}>159.04 litros</Text> menos que la semana pasada!</Text>
                    </View>
                    {/* Consumo END */}
                    {/* Semanal BEGIN */}
                    <View style={style.card}>
                        <View style={style.row}>
                            <View style={[style.col6, style.textCenter]}>
                                <Text style={style.subtitle}>Semana Pasada</Text>
                                <Text style={style.title}>1092 L</Text>
                            </View>
                            <View style={[style.col6, style.textCenter]}>
                                <Text style={[style.subtitle, style.correct]}>Semana Actual</Text>
                                <Text style={style.title}>932.96 L</Text>
                            </View>
                        </View>
                    </View>
                    {/* Semanal END */}
                    {/* Información Relevante BEGIN */}
                    <Text style={style.title}>Información Relevante</Text>
                    <View style={style.card}>
                        <Text style={style.title}>136 Litros</Text>
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
        borderRadius: 50,
    },
    alert: {
        width: '90%',
        padding: 20,
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
    col10: {
        flex: 0.835
    },
    col9: {
        flex: 0.75
    },
    col6: {
        flex: 0.5
    },
    col3: {
        flex: 0.25
    },
    col2: {
        flex: 0.165
    }
});

export default HomeScreen;