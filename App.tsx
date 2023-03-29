import 'react-native-gesture-handler'; //Don't move this line!
import React from 'react'

//Resources
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navigator
import { MenuLateral } from './src/navigator/MenuLateral';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MenuLateral/>
    </NavigationContainer>
  )
}

export default App