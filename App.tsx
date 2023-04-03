import 'react-native-gesture-handler'; //Don't move this line!
import React, {useEffect} from 'react'
import {Button, Image, Text, TouchableOpacity} from 'react-native'

//Resources
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Navigator
import { MenuLateral } from './src/navigator/MenuLateral';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from './src/navigator/Tabs';

//Styles
import { styles } from './src/theme/appTheme';


const Stack = createNativeStackNavigator();

export const LogoTvp =() => {
  return( <Image style={ { width:50, height:50 } } source={ require('./src/assets/android-chrome-256x256.png')}/>    )
}

export const BotonVivo = () => {
  return (
      <TouchableOpacity  style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>VIVO</Text>
      </TouchableOpacity>
      // <Button title='VIVO' color='red' onPress={vivoVideo} />
  )
}

function App() {

  return (
    <NavigationContainer>
      {/* <MenuLateral/> */}

      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Tabs}
          options={{
            headerTitle: () => <LogoTvp />,
            headerRight: () => (<BotonVivo />),
            headerTitleAlign:'center'
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App