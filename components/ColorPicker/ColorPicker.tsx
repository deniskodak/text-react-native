import React, { useState } from 'react';
import { View, Button, ViewStyle, StyleSheet } from 'react-native';

export default function ColorPicker() {
    const [color, setColor] = useState<string>('green');
    
    const changeColor = () => {
        let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };
    
    return (
        <View style={styles.container}>
          <View style={[styles.subContainer, {backgroundColor: color}]}></View>
            <Button color="#3f51b5" title="Change color" onPress={changeColor}></Button>
        </View>
    )
};

interface Styles {
  container: ViewStyle,
  subContainer: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {marginBottom: 20, alignItems: 'center' },
subContainer: { width: 100, height: 100, borderRadius: 75, borderWidth: 2, borderColor: 'blue', marginBottom: 20 },
});


