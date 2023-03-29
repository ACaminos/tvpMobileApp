import react, { useState } from 'react'
import { Button, Image, TouchableOpacity, View, Text } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

//Screens
import { HomeScreen } from '../screens/HomeScreen';
import { Secciones } from '../screens/Secciones';
import SettingScreen from '../screens/SettingScreen';
import { OtherScreen } from '../screens/OtherScreen';

//Navigator
import { Tabs } from './Tabs';

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import VivoVideo from '../video/VivoVideo';
import SocialNetworksScreen from '../screens/SocialNetworksScreen';

const Drawer = createDrawerNavigator();

export const logoTvp =() => {
    return(
        <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png')}/>
    )
}

export const botonVivo = () => {
    return (
        <TouchableOpacity  style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>VIVO</Text>
        </TouchableOpacity>
        // <Button title='VIVO' color='red' onPress={vivoVideo} />
    )
}

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={ ( props ) => <MenuInterno {...props} /> }>
        <Drawer.Screen
            name='Tabs'
            component={ Tabs }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Inicio',
                headerRight: () => ( botonVivo() )
            }}
            />
        <Drawer.Screen
            name='SettingScreen'
            component={ SettingScreen }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Configuraciones',
                headerRight: () => ( botonVivo() )
            }}
            />
        <Drawer.Screen
            name='VivoVideo'
            component={ VivoVideo }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Vivo',
                headerRight: () => ( botonVivo() )
            }}
        />
        <Drawer.Screen
            name='SocialNetworksScreen'
            component={ SocialNetworksScreen }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Redes Sociales',
                headerRight: () => ( botonVivo() )
            }}
        />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation } : DrawerContentComponentProps ) => {

    return(
        <DrawerContentScrollView>
            {/* Logo del canal */}
            <View style={ styles.avatarContainer }>
                <Image source={ require('../assets/android-chrome-256x256.png') }
                style={ styles.avatar }
                />
            </View>

            {/* Opciones del menu */}
            <View style={ styles.menuContainer }>
                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('Home') }>
                    <Icon name="home-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('Secciones') }>
                    <Icon name="newspaper-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Ultimas Noticias</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('Secciones') }>
                    <Icon name="apps-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Programas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('VivoVideo') }>
                    <Icon name="tv-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Transmisión en vivo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('SocialNetworksScreen') }>
                    <Icon name="globe-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Nuestras Redes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('SettingScreen') }>
                    <Icon name="options-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Configuraciones</Text>
                </TouchableOpacity>

                <Text style={ { color:'black', marginLeft:10, textAlign:'right' } }>Version 1.0.0</Text>
            </View>
        </DrawerContentScrollView>
    )
}