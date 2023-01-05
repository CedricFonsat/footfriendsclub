import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function LandingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/logo.png')}
      style={{
        width: 150,
        height: 150,
        textAlign: 'center'
      }}
      />
      <Text style={styles.title}>FootFriendsClub</Text>
      <Text style={{
        color: 'white',
        width: 270,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 35,
        fontWeight: '300'
      }}>Bienvenue sur FootFriendsClub l'appli de paris spotif entre amis.</Text>
      <View>
        <View style={styles.signin}>
        <Button
          title="Se connecter"
          color="black"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigation.navigate('SignIn')}
        />
        </View>
        <View style={styles.signup}>
        <Button
          title="Creer un compte"
          color="#6646D7"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => navigation.navigate('SignUp')}
        />
        </View>
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
  signin: {
    height: 50,
    width: 250,
    margin: 12,
    backgroundColor: '#6646D7',
    borderRadius: 50,
    paddingTop: 5
  },
  signup: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 2,
    borderColor: '#6646D7',
    borderRadius: 50,
    paddingTop: 4
  },
  title: {
    color: '#6646D7',
    fontWeight: 'bold',
    fontSize: 24,

  }
});
