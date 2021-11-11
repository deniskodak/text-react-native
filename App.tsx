import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, useWindowDimensions, ScrollView, Image, Platform, KeyboardAvoidingView, Button, Modal, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer >
      <SafeAreaView style={styles.container}>
      <MyTabs />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
