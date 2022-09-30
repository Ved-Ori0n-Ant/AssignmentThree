import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListingComponent from './src/screens/homeScreen';
import FormComponent from './src/screens/firstScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "homeScreen" component = {ListingComponent} />
        <Stack.Screen name = "formScreen" component = {FormComponent} />
        {/* <Stack.Screen name = "displayScreen" component = {DisplayComponent} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;