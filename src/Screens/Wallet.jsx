import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";

export default function Wallet() {
  return (
      <View style={styles.container}>
          <Text style={{
              color: 'white',
              fontSize: 14
          }}>Ton solde</Text>
          <View style={{
              flexDirection: 'row'
          }}>
              <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>$</Text>
              <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>140,23</Text>
          </View>
          
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

});
