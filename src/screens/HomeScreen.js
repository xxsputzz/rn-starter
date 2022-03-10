import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button 
        title="Go to Components Demo" 
        onPress={ ()=> navigation.navigate('Components') }
        />
      <Button 
        title="Go to List Demo" 
        onPress={ ()=> navigation.navigate('List') }
        />
      <Button 
        title="Go to Image Demo" 
        onPress={ ()=> navigation.navigate('Image') }
        />
      <Button 
        title="Go to Counter Demo" 
        onPress={ ()=> navigation.navigate('Counter') }
        />
      <Button 
        title="Go to Counter Reducer Demo" 
        onPress={ ()=> navigation.navigate('CounterReducer') }
        />
        <Button 
        title="Go to Color Demo" 
        onPress={ ()=> navigation.navigate('Color') }
        />
        <Button 
        title="Go to Square Demo" 
        onPress={ ()=> navigation.navigate('Square') }
        />
        <Button 
        title="Go to Square Reducer Demo" 
        onPress={ ()=> navigation.navigate('SquareReducer') }
        />
        <Button 
        title="Go to Text Demo" 
        onPress={ ()=> navigation.navigate('Text') }
        />
        <Button 
        title="Go to Box Screen Demo" 
        onPress={ ()=> navigation.navigate('Box') }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


