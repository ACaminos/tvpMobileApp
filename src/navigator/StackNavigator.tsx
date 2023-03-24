import React from 'react'
import { Image, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import { OtherScreen } from '../screens/OtherScreen';
import SocialNetworksScreen from '../screens/SocialNetworksScreen';

const Stack = createStackNavigator();

// function LogoTvp(){
//   return(
//     <Image style={{width:50, height:50, left:200}} source={require('../assets/android-chrome-256x256.png')} />
//   )
// }

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowColor: 'transparent',
            } ,
            cardStyle:{backgroundColor:'white'}
        }}
        >
      <Stack.Screen
        name="HomeScreen"
        component={ HomeScreen }
        options={{
            headerTitle:(props) => (<Image style={{width:50, height:50}} source={require('../assets/android-chrome-256x256.png')} />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center',
            title:'Inicio'
        }} />
      <Stack.Screen
        name="SettingScreen"
        component={ SettingScreen }
        options={{
            headerTitle:(props) => (<Image style={{width:50, height:50}} source={require('../assets/android-chrome-256x256.png')} />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center',
            title:'Configuraciones'
        }}
        />
      <Stack.Screen
        name="OtherScreen"
        component={ OtherScreen }
        options={{
            headerTitle:(props) => (<Image style={{width:50, height:50}} source={require('../assets/android-chrome-256x256.png')} />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center'
        }}
        />
      <Stack.Screen
        name="SocialNetworksScreen"
        component={ SocialNetworksScreen }
        options={{
            headerTitle:(props) => (<Image style={{width:50, height:50}} source={require('../assets/android-chrome-256x256.png')} />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center'
        }}
        />
    </Stack.Navigator>
  )
}
