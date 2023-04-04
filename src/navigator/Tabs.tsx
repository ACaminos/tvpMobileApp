import React from 'react'
import { Text, Image } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screens
import SettingScreen from '../screens/SettingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Secciones } from '../screens/Secciones';
import SocialNetworksScreen from '../screens/SocialNetworksScreen';
import VivoVideo from '../video/VivoVideo';

const Tab = createMaterialBottomTabNavigator();

export const logoTvp =() => {
  return( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png')}/>    )
}


export const Tabs = () => {
  return (
    <Tab.Navigator barStyle={ { backgroundColor:'#091e40' } } inactiveColor={'white'} shifting={true} activeColor={'white'}>
      <Tab.Screen
        name='inicio'
        component={ HomeScreen }
        options={{
          title:'Inicio',
          tabBarColor:'white',
          tabBarIcon: ( props ) =>
            <Text style={ { color:'white' } }>
              <Icon name="home-outline" size={ 25 } color="#2497ff" />
            </Text>
          }}/>

      <Tab.Screen
        name='Secciones'
        component={ Secciones }
        options={{
          title:'Secciones',
          tabBarIcon:( props ) =>
            <Text style={ { color:'white' } }>
                <Icon name="apps-outline" size={ 25 } color="#2497ff" />
            </Text>
          }}/>

      <Tab.Screen
        name='opciones'
        component={ SocialNetworksScreen }
        options={{
          title:'Extras',
          tabBarIcon:( props ) =>
            <Text style={ { color:'white' } }>
              <Icon name="reorder-four-outline" size={ 25 } color="#2497ff" />
            </Text>
      }}/>

      <Tab.Screen
        name='SettingScreen'
        component={ VivoVideo }
        options={{
          title:'Configuraciones',
          tabBarIcon:( props ) =>
            <Text style={ { color:'white' } }>
              <Icon name="settings-outline" size={ 25 } color="#2497ff" />
            </Text>
      }}/>
    </Tab.Navigator>
  )
}