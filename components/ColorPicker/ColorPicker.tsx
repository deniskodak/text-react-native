import React, { useState } from 'react';
import { View, Button } from 'react-native';

export default function ColorPicker() {
    const [color, setColor] = useState<string>('green');
    
    const changeColor = () => {
        let randomColor: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    };
    
    return (
        <View style={{marginBottom: 20, alignItems: 'center' }}>
          <View style={{backgroundColor: color, width: 100, height: 100, borderRadius: 75, borderWidth: 2, borderColor: 'blue', marginBottom: 20,}}></View>
            <Button color="#9e9e9e" title="Change color" onPress={changeColor}></Button>
        </View>
    )
};
