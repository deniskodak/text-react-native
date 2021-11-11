import React from 'react';
import { View, Text } from 'react-native';

export default function TextName({name} : {name: string}) {
    
    return (
        <View style={{ alignItems: 'center', marginBottom: 50 }}>
          {name ?
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Your name is {name}</Text>
                      : null
          }
        </View>
    )
};