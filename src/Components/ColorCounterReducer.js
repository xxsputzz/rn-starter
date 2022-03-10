import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ColorCounterReducer = ({ color, onIncrease, onDecrease }) => {
    console.log();
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
        </View>
    );
};

const style = StyleSheet.create({});

export default ColorCounterReducer;