import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingComponent from './src/screens/homeScreen';
import FormComponent from './src/screens/firstScreen';
//import Ionic from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return(
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name = "homeScreen" component = {ListingComponent} />
    //     <Stack.Screen name = "formScreen" component = {FormComponent} />
    //     {/* <Stack.Screen name = "displayScreen" component = {DisplayComponent} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = "homeScreen" component = {ListingComponent} />
        <Tab.Screen name = "formScreen" component = {FormComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;