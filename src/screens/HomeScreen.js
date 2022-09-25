import React, { useEffect, Component } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

import Styles from '../styles/Styles';

const MAX_WATER = 100;
const WEEK_USAGE = 800.96;

const calculatePercentage = (usage) => {
    return `${usage / MAX_WATER}`;
};

class HomeScreen extends Component {
    state = {
        data: 0,
        hasAlert: false
    }

    getWater() {
        fetch('https://dropnot-3dfce-default-rtdb.firebaseio.com/.json')
            .then((res) => res.json())
            .catch((error) => console.error(error))
            .then((json) => this.setState({data: json.salidaDeAgua.aguaConsumida, hasAlert: Boolean(json.salidaDeAgua.alerta)}))
            .catch((error) => console.error(error))
            .finally(() => {
                setInterval(() => this.getWater, 2000);
            })
    }

    render() {
        return (
          <SafeAreaView>
            <ScrollView>
              <View
                style={[Styles.main, Styles.textCenter, { paddingTop: 10 }]}
              >
                <Text style={[Styles.title, {fontSize: 24}]}>Consumo de Hoy</Text>
                {this.getWater()}
                {/* Widget BEGIN */}
                <MaskedView
                  style={{ flex: 1, flexDirection: 'row', height: 210, resizeMode: 'contain'}}
                  maskElement={
                    <View
                      style={{
                        // Transparent background because mask is based off alpha channel.
                        backgroundColor: "transparent",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                        <View
                            style={{borderRadius: 30, width: '70%', height: '100%', backgroundColor: 'black'}}
                        ></View>
                    </View>
                  }
                >
                {/* Shows behind the mask, you can put anything here, such as an image */}
                <View
                style={{
                    flex: 1,
                    flexDirection: 'column-reverse'
                }}
                >
                    <View style={[Styles.bgPrimary, {flex: 1 - calculatePercentage(this.state.data), width: '100%', alignItems: 'center'}]}>
                        <Text style={[Styles.subtitle, Styles.cWhite, {fontSize: 28, marginBottom: 5, marginTop: 15}]}>{(MAX_WATER - this.state.data).toFixed(2)} L</Text>
                        <Text style={[Styles.subtitle, Styles.cWhite, {margin: 0, padding: 0, fontSize: 12}]}>Restantes</Text>
                    </View>
                    <View style={[{flex: calculatePercentage(this.state.data), backgroundColor: 'lightgrey', width: '100%'}]}></View>
                </View>   
                </MaskedView>
                {/* Widget END */}
                <Text style={[Styles.title, Styles.cPrimary, {fontSize: 48, marginBottom: 5}]}>{(this.state.data).toFixed(2)} L</Text>
                {/* Litros END */}
                {/* Alerta BEGIN */}
                <View style={[Styles.alert, {display: (this.state.hasAlert ? '' : 'none')}]}>
                  <View style={Styles.row}>
                    <View style={Styles.col2}>
                      <Image
                        source={require("../../assets/placeholder-warning.png")}
                        style={style.iconWarning}
                      ></Image>
                    </View>
                    <View style={Styles.col9}>
                      <Text>
                        Alerta: Se ha detectado que el Nut
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
                  <Text style={Styles.subtitle}>
                    Su consumo bajó{" "}
                    <Text style={Styles.highlighted}>14.56%</Text>
                  </Text>
                  <Text>
                    ¡Usaste{" "}
                    <Text style={Styles.highlighted}>159.04 litros</Text> menos
                    que la semana pasada!
                  </Text>
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
                      <Text style={[Styles.subtitle, Styles.correct]}>
                        Semana Actual
                      </Text>
                      <Text style={Styles.title}>{(this.state.data + WEEK_USAGE).toFixed(2)} L</Text>
                    </View>
                  </View>
                </View>
                {/* Semanal END */}
                {/* Información Relevante BEGIN */}
                <Text style={Styles.title}>Información Relevante</Text>
                <View style={Styles.card}>
                  <Text style={Styles.title}>136 Litros</Text>
                  <Text>
                    El consumo de agua en los hogares varía enormemente según el
                    número de personas que hayan en casa, y sus necesidades
                    personales. Una persona consume una media de 136 litros por
                    día. Todos los días se pierden 112 litros por propiedad, por
                    fugas.
                  </Text>
                </View>
                {/* Información Relevante END */}
              </View>
            </ScrollView>
          </SafeAreaView>
        );
    }
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
    },
});

export default HomeScreen;