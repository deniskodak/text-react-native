import React from 'react';
import { View, Button } from 'react-native';

interface IProps {
    onOpen: (type: boolean) => {},
}
export default function ShowGreetingBtn({onOpen} : IProps) {
    
    return (
        <View style={{alignItems: "center", marginBottom: 30}}>
          <Button title="Show Greeting" onPress={()=> onOpen(true)}/>
        </View>
    )
};