import React, {useState} from 'react';
import { View, Modal, Button, Text } from 'react-native';

interface IProps {
    isShown: boolean,
    onClose: (type: boolean) => {}
}

export default function ModalContainer({ isShown, onClose } : IProps) {
    return (
        <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isShown}
                onRequestClose={() => {
                onClose(!isShown);
                }}
            >
                <View style={{flex: 1, backgroundColor: '#000000ad', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ fontSize: 50, color: 'white', marginBottom: 20 }}>Hello !</Text>
                    <Button title='Hide Greetings' onPress={(() => onClose(!isShown))}/>
                </View>
            </Modal>
    </View>
    )
}