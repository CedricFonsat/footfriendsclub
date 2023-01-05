import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function Profile() {
  return (
      <View style={styles.container}>
        <View style={styles.image}><Text style={{color: 'white'}}>ghjn</Text></View>
          
          <View style={{
            backgroundColor: '#262B35',
            width: 300,
            height: 50,
            borderRadius: 30,
          }}><TextInput
          value='Pseudo'
          style={{
            padding: 15
           }}
          /></View>
                    <View style={{
            backgroundColor: '#262B35',
            width: 300,
            height: 50,
            borderRadius: 30,
            marginTop: 15,
          }}><TextInput
          value='Email'
          style={{
            padding: 15
           }}
          /></View>


<View style={{
            backgroundColor: '#6646D7',
            width: 300,
            height: 50,
            borderRadius: 30,
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}><TextInput
          value='Mettre a jour'
          style={{
            padding: 15
           }}
          /></View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 55,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: '#6646D7',
    borderWidth: 2,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }

});