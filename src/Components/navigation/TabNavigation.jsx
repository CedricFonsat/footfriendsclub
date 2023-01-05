import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../../Screens/HomeScreen";
import Profile from "../../Screens/Profile";
import FriendsCup from "../../Screens/FriendsCup"
import Wallet from '../../Screens/Wallet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {

  return (
<Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { backgroundColor: 'rgba(38, 43, 53, 1)'},
    tabBarActiveTintColor: '#6646D7',
    tabBarIconStyle: {width: 60}
}}>
      <Tab.Screen       
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
             }} />
                       <Tab.Screen       
          name="FriendsCup"
          component={FriendsCup}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="soccer" color={color} size={size} />
              ) }} />
               
           <Tab.Screen       
          name="Wallet"
          component={Wallet}
          options={{ headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="wallet" color={color} size={size} />
              ) }} />
               <Tab.Screen       
          name="Profile"
          component={Profile}
          options={{ headerShown: false,   tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ) }} />
      
    </Tab.Navigator>
  );
}

