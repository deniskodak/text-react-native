import React, {useEffect, useState} from 'react';
import { View, ScrollView, Button, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
}

export default function Form({ onSave }) {
    
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const storeData = async (value: string) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue);
            onSave(value);
        } catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        
        const getStoreData = async () => {
            try {
                const value: string | null = await AsyncStorage.getItem('@storage_Key')
                if (value !== null) {
                    onSave(value);
                }
                else {
                    onSave('')
                }
            } catch (e) {
                console.log(e);
            }
        };
        getStoreData();
    }, [])

    return (
        <View style={{ height: 100, marginHorizontal: 50, marginBottom: 50}}>
        <ScrollView >
          <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={{flexDirection: 'row', marginBottom: 20}}>
                <TextInput style={{flexGrow: 1, padding: 20, marginRight: 30, backgroundColor: '#ffffff'}} placeholder="name" onChangeText={(text:string) => setName(text)} value={name} />
                <Button color="#9e9e9e" title='Store Name' onPress={() => { storeData(name); setName('')}}/>
            </View>
              <TextInput style={{ padding: 20, backgroundColor: '#ffffff' }} placeholder="password" value={password} onChangeText={(text: string) => setPassword(text)}/>
        </KeyboardAvoidingView>
        </ScrollView>
        </View>
    )
}