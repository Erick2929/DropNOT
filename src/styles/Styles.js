import React from "react";
import { StyleSheet } from "react-native";

export const Color = {
    Primary: '#79ADDC',
    Secondary: '#E97E00',
    Correct: 'green',
    Incorrect: 'firebrick',
};

const Styles = StyleSheet.create({
    main: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    /* Text */
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
    /* Spans */
    highlighted: {
        color: Color.Primary,
        fontWeight: 'bold'
    },
    correct: {
        color: Color.Correct
    },
    incorrect: {
        color: Color.Incorrect
    },
    textCenter: {
        alignItems: 'center'
    },
    cBlack: {
        color: 'black'
    },
    cWhite: {
        color: 'white'
    },
    /* Areas */
    bgPrimary: {
        backgroundColor: Color.Primary
    },
    bgSecondary: {
        backgroundColor: Color.Secondary
    },
    bgLightgrey: {
        backgroundColor: 'lightgrey'
    },
    /* Pseudo Bootstrap */
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        padding: 20,
        marginBottom: 20
    },
    alert: {
        width: '100%',
        padding: 20,
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

export default Styles;