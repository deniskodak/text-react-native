import React, {useState} from 'react';
import { View, Modal, Button, Text, ViewStyle, StyleSheet, TextStyle } from 'react-native';


export default function ModalContainer() {
     const [modalVisible, setModalVisible] = useState<boolean>(false);
    return (
        <View style={ {alignItems: 'center' }}>
            
            <View style={styles.container}>
            <Button title="Show Greeting" onPress={()=> setModalVisible(true)}/>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.btnContainer}>
                    <Text style={styles.text}>Hello !</Text>
                    <Button title='Hide Greetings' onPress={(() => setModalVisible(!modalVisible))} />
                </View>
            </Modal>
        </View>
    )
};

interface Styles {
    container: ViewStyle,
    btnContainer: ViewStyle,
    text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
    container: { alignItems: "center", marginBottom: 30 },
    btnContainer: { flex: 1, backgroundColor: '#000000ad', alignItems: 'center', justifyContent: 'center' },
    text: { fontSize: 50, color: 'white', marginBottom: 20 },
})