import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = ({ imageSource, title, score}) => {
    return (
        <View>
        <Image source={imageSource} />
            <Text>Show Image of a {title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default ImageDetail;