import React, { useState } from 'react';
import { TextStyle, View, ViewStyle, StyleSheet, Text, ImageStyle, ImageBackground, useWindowDimensions, ScrollView, Image, Platform, KeyboardAvoidingView, Button, Modal, TextInput } from 'react-native';
import ImagePickerExample from '../components/ImagePicker/ImagePicker';
import FlatLists from '../components/FlatListExp/FlatListExp';
import ModalContainer from '../components/Modal/Modal';

import ColorPicker from '../components/ColorPicker/ColorPicker';
import ShowGreetingBtn from '../components/ShowGreetingsBtn/ShowGreetingBtn';
import Form from '../components/Form/Form';
import TextName from '../components/TextName/TextName';

export default function HomeScreen({ navigation }) {
    const { width, height } = useWindowDimensions();
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [storeName, setStoreName] = useState<string | null>('');

  return (
      <ScrollView style={{ flex: 1}}>
        
      <ImageBackground style={{width: '100%', height: '100%'}} resizeMode='cover' source={(require('../assets/background.jpg'))}>
        <ModalContainer isShown={modalVisible} onClose={setModalVisible} />
              
        <View style={[styles.container, { marginVertical: 30}]}>
            <Image style={styles.img} source={require('../assets/react-logo.png')} />
        </View>
              
        <View style={styles.container}>
          <Text style={styles.text}>Window is {width}x{height}</Text>
        </View>
              
        <View style={[styles.container, {marginBottom: 20}]}>
                  <Button  color="#9e9e9e" title='Go to Settings' onPress={ () => {navigation.navigate('Settings')}} />
        </View>
        
        <FlatLists/>
       
       <ColorPicker/>
        
        <ShowGreetingBtn onOpen={(type) => { setModalVisible(type) }} />
              
        <Form onSave={setStoreName}/>
        
        <ImagePickerExample />

        <TextName name={storeName}/>

          </ImageBackground>
        </ScrollView>
  );
};

interface Styles {
  container: ViewStyle,
  img: ImageStyle,
  text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {alignItems: 'center'},
  img: { width: 50, height: 50 },
  text: {fontSize: 15, fontWeight: 'bold', marginBottom: 20},
});
