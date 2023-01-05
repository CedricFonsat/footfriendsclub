import React, { useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { user_login } from "../api/user_api";

export default function SignIn({ navigation }) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = () => {
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
      })
      .then(result => {
        if (result.status == 200) {
        AsyncStorage.setItem('AccessToken', result.data.token);
          navigation.replace('TabNavigation', { userName: 'Home' });
        }
      })
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: 150,
            height: 150,
            justifyContent: "center",
          }}
        />
      </View>
      <Text style={styles.title}>Se connecter</Text>
      <Text
        style={{
          color: "white",
          width: 300,
          textAlign: "center",
          marginTop: 10,
          marginBottom: 45,
          fontWeight: "300",
        }}
      >
        Merci de remplir le formulaire pour continuer et avoir acces au paries
        entre amis.
      </Text>
      <View>
        <View style={styles.signin}>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Pseudo" placeholderTextColor="#606268"/>
        </View>

        <View style={styles.signin}>
          <TextInput style={styles.input} value={password} onChangeText={setPassword}
           placeholder="Mot de passe" placeholderTextColor="#606268" secureTextEntry={true}/>
        </View>

        <View style={styles.signup}>
          <Button
            title="Se connecter"
            color="white"
            accessibilityLabel="Learn more about this purple button"
            onPress={() =>  handleLogin() }
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.subtitle}>Pas encore de compte ? </Text>
          <Text
            style={{
              color: "#6646D7",
            }}
            onPress={() => {
              if (authenticate) {
                navigation.navigate("SignUp")
              }
            }
          }
          >
            Créer un compte
          </Text>
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
    width: 300,
    margin: 12,
    backgroundColor: "#262B35",
    borderRadius: 50,
    paddingTop: 5,
  },
  signup: {
    height: 50,
    width: 300,
    margin: 12,
    borderRadius: 50,
    paddingTop: 5,
    backgroundColor: "#6646D7",
  },
  input: {
    padding: 10,
    color: "#606268",
    paddingLeft: 25,
  },
  title: {
    color: "#6646D7",
    fontWeight: "bold",
    fontSize: 24,
  },
  subtitle: {
    color: "white",
  },
});
