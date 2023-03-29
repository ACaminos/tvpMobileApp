import React from 'react'
import { Image, Button } from 'react-native'

//Resources
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import { HomeScreen } from '../screens/HomeScreen';
import { OtherScreen } from '../screens/OtherScreen';
import SettingScreen from '../screens/SettingScreen';
import SocialNetworksScreen from '../screens/SocialNetworksScreen';
import NewsScreen from '../screens/NewsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowColor: 'transparent',
                borderBottomColor: 'black',
                borderWidth:5
            } ,
            cardStyle:{ backgroundColor:'white' }
        }}
        >
      <Stack.Screen
        name="HomeScreen"
        component={ HomeScreen }
        options={{
            headerTitle:(props) => (<Image style={{width:50, height:50}} source={require('../assets/android-chrome-256x256.png')} />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center',
            title:'Inicio',
            cardStyle:{ borderBottomColor:'#000' }
        }} />
      <Stack.Screen
        name="SettingScreen"
        component={ SettingScreen }
        options={{
            headerTitle:( props ) => ( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png') } /> ),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center',
            title:'Configuraciones',
        }}
        />
      <Stack.Screen
        name="OtherScreen"
        component={ OtherScreen }
        options={{
            headerTitle:( props ) => ( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png') } /> ),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center'
        }}
        />
      <Stack.Screen
        name="SocialNetworksScreen"
        component={ SocialNetworksScreen }
        options={{
            headerTitle:( props ) => ( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png') } />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center'
        }}
        />
      <Stack.Screen
        name="newsScreen"
        component={ NewsScreen }
        options={{
            headerTitle:( props ) => ( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png') } />),
            headerRight: () => ( <Button title='VIVO' color="red" /> ),
            headerTitleAlign:'center'
        }}
        />
    </Stack.Navigator>
  )
}
