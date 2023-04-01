import React from 'react'
import { Text } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Screens
import SettingScreen from '../screens/SettingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Secciones } from '../screens/Secciones';

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
          title:'Secciones',
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