import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd3acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3a268afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58634a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title } : {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function FlatLists() {
  
  const renderItem = (item: {id: string, title: string}) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.listContainer}>
          <FlatList
              style={styles.listSubContainer}
              data={DATA}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.id}
            />
          <FlatList
              style={styles.listSubContainer}
              data={DATA}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={item => item.id}
      />
      </View>
  )
};

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 5,
    flexDirection: 'row',
  },

  listSubContainer: {
    height: 100,
    marginHorizontal: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 32,
  },
});
