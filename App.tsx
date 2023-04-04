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
import Seccion from './src/screens/Seccion';
import SettingScreen from './src/screens/SettingScreen';
import SocialNetworksScreen from './src/screens/SocialNetworksScreen';
import { Streams } from './src/screens/Streams';
import NewsScreen from './src/screens/NewsScreen';
import VivoVideo from './src/video/VivoVideo';


const Stack = createNativeStackNavigator();

export const LogoTvp =() => {
  return( <Image style={ { width:50, height:50 } } source={ require('./src/assets/android-chrome-256x256.png')}/>)
}

export const BotonVivo = ( { navigation } ) => {
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
      <Stack.Screen
        name="SettingScreen"
        component={ SettingScreen }
        options={{
            headerTitle:( props ) => ( <LogoTvp/> ),
            headerRight: () => ( <BotonVivo /> ),
            headerTitleAlign:'center',
            title:'Configuraciones',
        }}
        />

      <Stack.Screen
        name="SocialNetworksScreen"
        component={ SocialNetworksScreen }
        options={{
            headerTitle:( props ) => ( <LogoTvp />),
            headerRight: () => ( <BotonVivo /> ),
            headerTitleAlign:'center'
        }}
      />

      <Stack.Screen
        name="newsScreen"
        component={ NewsScreen }
        options={{
            headerTitle:( props ) => ( <LogoTvp />),
            headerRight: () => ( <BotonVivo /> ),
            headerTitleAlign:'center'
        }}
        />

      <Stack.Screen
        name="Streams"
        component={ Streams }
        options={{
            headerTitle:( props ) => ( <LogoTvp />),
            headerRight: () => ( <BotonVivo /> ),
            headerTitleAlign:'center'
        }}
      />

      <Stack.Screen
        name='Seccion'
        component={ Seccion }
        options={{
          headerTitle: () => <LogoTvp />,
          headerRight: () => (<BotonVivo />),
          headerTitleAlign:'center'
        }}
      />

      <Stack.Screen
        name='vivo'
        component={ VivoVideo }
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