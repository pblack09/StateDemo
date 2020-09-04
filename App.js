import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  // TODO FIX IT
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>No. of People in Store</Text>
      <Button style={styles.button}
        color='#00DC14'
        title="Entry"
        onPress={() => {
          setCounter(counter +1);
        }}/>
      <Button style={styles.button}
        color='red'
        title="Exit"
        onPress={()=> {
          setCounter(counter -1);
        }}/>
      <Button style={styles.button}
        color='#000'
        title='Random'
        onPress={() => setCounter( Math.floor((Math.random()*1000)+1 ))}/>
      <Text style={styles.count}>Current count: {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00B2FF',
  },
  button: {
  },
  count: {
    color: "#fff",
    fontSize: 28,
  },
});
