import React from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen';
import { Secciones } from '../screens/Secciones';
import SettingScreen from '../screens/SettingScreen';

const Tab = createMaterialBottomTabNavigator();


export const Tabs = () => {
  return (
    <Tab.Navigator barStyle={ { backgroundColor:'#091e40' } } inactiveColor={'white'} shifting={true} activeColor={'white'}>
      <Tab.Screen
        name='Home'
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
          title:'Programas',
          tabBarIcon:( props ) =>
            <Text style={ { color:'white' } }>
                <Icon name="apps-outline" size={ 25 } color="#2497ff" />
            </Text>
          }}/>
      <Tab.Screen
        name='SettingScreen'
        component={ SettingScreen }
        options={{
          title:'Configuraciones',
          tabBarIcon:( props ) =>
            <Text style={ { color:'white' } }>
              <Icon name="options-outline" size={ 25 } color="#2497ff" />
            </Text>
          }}/>
    </Tab.Navigator>
  )
}