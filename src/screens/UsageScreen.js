import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, Button } from 'react-native';

import Styles from '../styles/Styles';

const UsageScreen = () => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={Styles.main}>
            {/* Logo Header BEGIN */}
            <View style={Styles.textCenter}>
              <Image
                source={require("../../assets/placeholder-logo.png")}
                style={style.iconLogo}
              ></Image>
              <View style={[style.divider, style.w25]}></View>
            </View>
            {/* Logo Header END */}
            <View style={Styles.textCenter}>
                <Text style={Styles.title}>Tendencias de Uso</Text>
            </View>
            {/* Calendario BEGIN */}
            <View style={Styles.row}>
              <View style={[Styles.col6, style.leftCol]}>
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Enero</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, Styles.bgSecondary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc25]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc25]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc25]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Marzo</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Mayo</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, Styles.bgSecondary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc50]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Julio</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Septiembre</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Noviembre</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
              </View>
              <View style={[Styles.col6]}>
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Febrero</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Abril</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc25]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc50]}></View>
                    <View style={[style.circle, Styles.bgPrimary, style.perc25]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Junio</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Agosto</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Octubre</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
                {/* Mes BEGIN */}
                <Text style={Styles.subtitle}>Diciembre</Text>
                <View style={style.calendar}>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgTransparent]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                    <View style={[style.circle, Styles.bgPrimary]}></View>
                </View>
                {/* Mes END */}
              </View>
            </View>
            {/* Calendario END */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const style = StyleSheet.create({
    calendar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 50,
        margin: 1
    },
    iconLogo: {
        height: 50,
        resizeMode: 'contain'
    },
    divider: {
        backgroundColor: 'lightgrey',
        paddingVertical: 1,
        marginTop: 15,
        marginBottom: 25
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardText: {
        fontSize: 12
    },
    w25: {
        width: '25%'
    },
    w50: {
        width: '50%'
    },
    leftCol: {
        paddingRight: 10
    },
    perc25: {
        backgroundColor: '#D7C73C'
    },
    perc50: {
        backgroundColor: '#DCAE79'
    }
});

export default UsageScreen;