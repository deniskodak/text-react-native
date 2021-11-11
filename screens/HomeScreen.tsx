import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, useWindowDimensions, ScrollView, Image, Platform, KeyboardAvoidingView, Button, Modal, TextInput } from 'react-native';
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
      <View style={{ flex: 1}}>
        
      <ImageBackground style={{flex: 1, width: '100%', height: '100%'}} resizeMode='cover' source={(require('../assets/background.jpg'))}>
              <ModalContainer isShown={modalVisible} onClose={setModalVisible} />
              
        <View style={{ alignItems: 'center', marginVertical: 50 }}>
            <Image style={{width: 50, height: 50}} source={require('../assets/react-logo.png')} />
        </View>
              
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', marginBottom: 20}}>Window is {width}x{height}</Text>
        </View>
              
        <View style={{marginBottom: 20, alignItems: 'center'}}>
                  <Button  color="#9e9e9e" title='Go to Settings' onPress={ () => {navigation.navigate('Settings')}} />
        </View>
        
        <FlatLists/>
       
       <ColorPicker/>
        
        <ShowGreetingBtn onOpen={(type) => { setModalVisible(type) }} />
              
        <Form onSave={setStoreName}/>
        
        <ImagePickerExample />

        <TextName name={storeName}/>


          </ImageBackground>
        </View>
  );
};

