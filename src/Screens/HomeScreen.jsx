import React from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from "react-native";
import { DB_Match } from "../Components/Data/DataMatch";
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: 1,
      championnat: 'Premier League',
      teamfirst: 'Arsenal',
      teamsecond: 'Newcastle',
      time: '20:45',
      firstcote: 2.10,
      secondcote: 3.70,
      nullcote: 1.70
  },
  {
    id: 2,
      championnat: 'Liga Primera',
      teamfirst: 'FC Barcelona',
      teamsecond: 'Real Madrid',
      time: '20:00',
      firstcote: 1.10,
      secondcote: 2.70,
      nullcote: 3.70
  },
  {
    id: 3,
      championnat: 'Ligue 1 Uber Eat',
      teamfirst: 'PSG',
      teamsecond: 'RC Lens',
      time: '18:45',
      firstcote: 1.08,
      secondcote: 1.70,
      nullcote: 2.10
  }
]




const Item = ({ championnat,teamfirst,teamsecond,time, firstcote, secondcote, nullcote}) => (

  <View style={styles.signin}>
  <Text style={{color: '#606268', padding: 15}}>{championnat}</Text>
       
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 10,
              alignItems: 'center'
            }}
            ><Text
            style={{color: 'white', fontWeight: 'bold', fontSize: 18}}
            >{teamfirst}</Text><Text style={{color: '#606268'}}>  {time}  </Text><Text style={{color: 'white', fontWeight: 'bold',fontSize: 18}}>{teamsecond}</Text></View>
  
  
  
     <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{width: 105, height: 47, backgroundColor: 'rgba(0,0,0,0.5)',
         margin: 5, borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontWeight: '300', fontSize: 12, color: '#6646D7'}}>{teamfirst}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6646D7'}}>{firstcote}</Text>
        </View>
        <View style={{width: 105, height: 47, backgroundColor: 'rgba(0,0,0,0.5)', 
         margin: 5, borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontWeight: '300', fontSize: 12, color: '#6646D7'}}>Nul</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6646D7'}}>{nullcote}</Text>
        </View>
        <View style={{width: 105, height: 47, backgroundColor: 'rgba(0,0,0,0.5)',
         margin: 5, borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontWeight: '300', fontSize: 12, color: '#6646D7'}}>{teamsecond}</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#6646D7'}}>{secondcote}</Text>
        </View>
      </View> 
  
          </View>
  
);

export default function HomeScreen({navigation}) {

  const handleLogout = () => {
   AsyncStorage.removeItem('AccessToken');
}


  const renderItem = ({ item }) => (
    <Item championnat={item.championnat}
    teamfirst={item.teamfirst} 
    teamsecond={item.teamsecond} 
    time={item.time} 
    firstcote={item.firstcote} 
    secondcote={item.secondcote} 
    nullcote={item.nullcote} 
    />
  );

  return (
    <View style={styles.container}>
        <View style={{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40
}}>
<Image
      source={require('../../assets/logo.png')}
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
      }}
      />
       <Text style={styles.title}>FootFriendsClub</Text>
</View>
     
      <Text style={{
        color: 'white',
        width: 300,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 45,
        fontWeight: '300'
      }}>Bienvenue sur FootFriendsClub, vous pouvez desormais commencez a parié entre amis.</Text>
      <View>

<SafeAreaView 
style={{
  height: 550
}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>

  

        <View style={styles.signup}>
    




        </View>

<View style={{flexDirection: 'row', justifyContent: 'center', width: 300,
 height: 40, backgroundColor: '#6646D7', alignItems: 'center', marginLeft: 40, marginBottom: 15,
 borderRadius: 5 }}> 
<Text style={styles.subtitle} onPress={() => handleLogout()}>Se deconnecter</Text></View>

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
    height: 150,
    width: 360,
    margin: 12,
    backgroundColor: 'rgba(38, 43, 53, 0.5)',
    borderRadius: 15,
    paddingTop: 5
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
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
