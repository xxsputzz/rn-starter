import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 25;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        //color === 'red', 'green', 'blue'
        //change === +15, -15

    switch (color) {
        case 'red':
            if (red + change > 255 || red + change < 0) {
                return;
            } else {
                setRed(red + change);
            }
            return;
        case 'green':
            if (green + change > 255 || green + change < 0) {
                return;
            } else {
                setGreen(green + change);
            }
            return;
        case 'blue':
            if (blue + change > 255 || blue + change < 0) {
                return;
            } else {
                setBlue(blue + change);
            }
            return;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
                color="Red" />
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
                color="Green" />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
                color="Blue" />
            <View style={{ 
                height: 150, 
                width: 150, 
                backgroundColor: `rgb(${red},${green},${blue})`}} 
            />
         </View>
    );
};

const style = StyleSheet.create({});

export default SquareScreen;