import React from 'react';
import { View,  StyleSheet, Text, ScrollView, ViewStyle, TextStyle } from 'react-native';



export default function FlatLists() {

  return (
    <View style={styles.listContainer}>
      <ScrollView style={styles.listSubContainer}>
        <Text style={styles.item}>Test</Text>
        <Text style={styles.item}>Test</Text>
      <Text style={styles.item}>Test</Text>  
      <Text style={styles.item}>Test</Text>
      <Text style={styles.item}>Test</Text>
      </ScrollView >
     <ScrollView style={styles.listSubContainer}>
        <Text style={styles.item}>Test</Text>
        <Text style={styles.item}>Test</Text>
      <Text style={styles.item}>Test</Text>  
      <Text style={styles.item}>Test</Text>
      <Text style={styles.item}>Test</Text>
      </ScrollView >
      </View>
  )
};

interface Styles {
  listContainer: ViewStyle,
  listSubContainer: ViewStyle,
  item: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  listContainer: {
    marginHorizontal: 30,
    marginBottom: 5,
    flexDirection: 'row',
  },

  listSubContainer: {
    height: 150,
    width: 150,
    marginHorizontal: 20,
    overflow: 'scroll',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  }
});
