import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounterReducer from '../Components/ColorCounterReducer';

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number };
    //action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
    
    switch (action.type) {
        case 'change_red':
            if (state.red + action.payload > 255 || state.red + action.payload < 0 ) {
                return state;
            }
            return { ...state, red: state.red + action.payload };
        case 'change_green':
            if (state.green + action.payload > 255 || state.green + action.payload < 0 ) {
                return state;
            }
            return { ...state, green: state.green + action.payload };
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0 ) {
                return state;
            }
            return { ...state, blue: state.blue + action.payload };
        default:  
            return state;
    }
};

const SquareScreenReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounterReducer 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT }) } 
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT }) } 
                color="Red" />
            <ColorCounterReducer 
                onIncrease={() =>  dispatch({ type: 'change_green', payload: COLOR_INCREMENT }) } 
                onDecrease={() =>  dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT }) } 
                color="Green" />
            <ColorCounterReducer 
                onIncrease={() =>  dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) } 
                onDecrease={() =>  dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT }) } 
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

export default SquareScreenReducer;