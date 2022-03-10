import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOneStyle} />
            <View style={styles.boxTwoStyle} />
            <View style={styles.boxThreeStyle} />

        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxOneStyle: {
        backgroundColor: 'red',
        height: 50,
        width: 50,
        
    },
    boxTwoStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    boxThreeStyle: {
        backgroundColor: 'purple',
        height: 50,
        width: 50,

    },

});

export default BoxScreen;