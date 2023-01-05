import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un compte</Text>
      <Text style={{
        color: 'white',
        width: 300,
        textAlign: 'center',
        marginBottom: 45,
        fontWeight: '300'
      }}>Merci de remplir le formulaire pour continuer.</Text>
      <View>
        <View style={styles.signin}>
        <TextInput
        style={styles.input}
        value='Email'
      />
        </View>

        <View style={styles.signin}>
        <TextInput
        style={styles.input}
        value='Pseudo'
      />
        </View>

        <View style={styles.signin}>
        <TextInput
        style={styles.input}
        value='Mot de passe'
      />
        </View>

        <View style={styles.signup}>
        <Button
          title="Creer un compte"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
        </View>

<View style={{flexDirection: 'row', justifyContent: 'center'}}> 
<Text style={styles.subtitle}>Vous avez déjà un compte ? </Text>
        <Text style={{
        color: '#6646D7'
        }}>Se connecter</Text></View>

  </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: 'center'
  },
  signin: {
    height: 50,
    width: 300,
    margin: 12,
    backgroundColor: '#262B35',
    borderRadius: 50,
    paddingTop: 5
  },
  signup: {
    height: 50,
    width: 300,
    margin: 12,
    borderRadius: 50,
    paddingTop: 5,
    backgroundColor: '#6646D7',
  },
  input: {
    padding: 10,
    color: '#606268',
    paddingLeft: 25,
  },
  title: {
    color: '#6646D7',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
      color: 'white'
  }
});
