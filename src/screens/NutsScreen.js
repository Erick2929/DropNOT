import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image, Button } from 'react-native';

import Styles from '../styles/Styles';

const NutsScreen = () => {
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
            {/* Nuts BEGIN */}
            <View style={Styles.row}>
              <View style={[Styles.col6, Styles.textCenter, style.leftCol]}>
                {/* Card BEGIN */}
                <View style={[Styles.card, Styles.bgSecondary]}>
                  <Text style={[Styles.cWhite, style.cardSubtitle]}>Lavabo Cocina</Text>
                  <Text style={[Styles.cWhite, style.cardText]}>IP: 224.9.182.52</Text>
                </View>
                {/* Card END */}
                {/* Card BEGIN */}
                <View style={[Styles.card]}>
                  <Text style={style.cardSubtitle}>Regadera 2</Text>
                  <Text style={style.cardText}>IP: 106.23.57.112</Text>
                </View>
                {/* Card END */}
                {/* Card BEGIN */}
                <View style={[Styles.card]}>
                  <Text style={style.cardSubtitle}>Lavadero cuarto 2</Text>
                  <Text style={style.cardText}>IP: 166.131.209.96</Text>
                </View>
                {/* Card END */}
              </View>
              <View style={[Styles.col6, Styles.textCenter]}>
                {/* Card BEGIN */}
                <View style={[Styles.card]}>
                  <Text style={style.cardSubtitle}>Regadera 1</Text>
                  <Text style={style.cardText}>IP: 10.185.45.230</Text>
                </View>
                {/* Card END */}
                {/* Card BEGIN */}
                <View style={[Styles.card]}>
                  <Text style={style.cardSubtitle}>Lavabo cuarto 1</Text>
                  <Text style={style.cardText}>IP: 171.214.250.212</Text>
                </View>
                {/* Card END */}
              </View>
            </View>
            {/* Nuts END */}
            {/* Agregar Nut BEGIN */}
            <View style={[Styles.card, Styles.bgPrimary, Styles.textCenter]}>
              <Text style={[Styles.title, Styles.cWhite]}>Agregar nuevo Nut</Text>
            </View>
            {/* Agregar Nut END */}
            {/* ¿Cómo instalar? BEGIN */}
            <View style={[Styles.card, Styles.textCenter]}>
              <Text style={Styles.subtitle}>¿Cómo instalar tu Nut?</Text>
              <Button title="Toca Aquí"></Button>
            </View>
            {/* ¿Cómo instalar? END */}
            <View style={[Styles.alert, Styles.textCenter]}>
              <Text style={Styles.subtitle}>Términos y Condiciones</Text>
              <Text style={[style.cardText, Styles.cBlack]}>
                These Application Standard Terms and Conditions written on this
                webpage shall manage your use of our application, DropNot
                accessible at DropNot.com. These Terms will be applied fully and
                affect to your use of this App. By using this App, you
                agreed to accept all terms and conditions written in here. You
                must not use this Application if you disagree with any of these
                App Standard Terms and Conditions. Minors or people below 18
                years old are not allowed to use this Application.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const style = StyleSheet.create({
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
    }
});

export default NutsScreen;