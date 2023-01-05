import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./src/Screens/LandingScreen";
import SignUp from "./src/Screens/SignUp";
import SignIn from "./src/Screens/SignIn";
import TabNavigation from "./src/Components/navigation/TabNavigation";
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    setTimeout(() => {
        handleGetToken()
    }, 2000);
})

const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem("AccessToken")
    if (!dataToken) {
      navigation.replace("SignIn")
    }else{
      navigation.replace('TabNavigation', { userName: 'Home' });
    }
  }

  return (
    <NavigationContainer options={{ headerShown: false }}>
      <Stack.Navigator initialRouteName="LandingScreen">
  
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> */}


<Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: '',
          headerBackTitle: '',
          headerTintColor: '#6646D7',
          headerStyle: {
            backgroundColor: '#121212',
          },
        }}
      />
       <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />

        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
