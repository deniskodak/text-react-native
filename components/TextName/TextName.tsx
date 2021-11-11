import React from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet} from 'react-native';

export default function TextName({name} : {name: string}) {
    
    return (
        <View style={styles.container}>
          {name ?
                      <Text style={styles.text}>Your name is {name}</Text>
                      : null
          }
        </View>
    )
};

interface Styles {
  container: ViewStyle,
  text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: { alignItems: 'center', marginBottom: 50 },
text: { color: 'white', fontWeight: 'bold', fontSize: 20 },
});