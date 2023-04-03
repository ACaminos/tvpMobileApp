import { Image, TouchableOpacity, View, Text } from 'react-native'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

//Screens
import { Streams } from '../screens/Streams';
import SettingScreen from '../screens/SettingScreen';
import NewsScreen from '../screens/NewsScreen';
import SocialNetworksScreen from '../screens/SocialNetworksScreen';

//Navigator
import { Tabs } from './Tabs';

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import VivoVideo from '../video/VivoVideo';
import Seccion from '../screens/Seccion';

//Styles
import { styles } from '../theme/appTheme';


const Drawer = createDrawerNavigator();

export const logoTvp =() => {
    return( <Image style={ { width:50, height:50 } } source={ require('../assets/android-chrome-256x256.png')}/>    )
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
    <Drawer.Navigator>
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
                headerRight: () => ( botonVivo() ),
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
        <Drawer.Screen
            name='newsScreen'
            component={ NewsScreen }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Noticias',
                headerRight: () => ( botonVivo() )
            }}
        />
        <Drawer.Screen
            name='Streams'
            component={ Streams }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Streams',
                headerRight: () => ( botonVivo() )
            }}
        />
        <Drawer.Screen
            name='Seccion'
            component={ Seccion }
            options={{
                headerTitle: () => ( logoTvp() ),
                headerTitleAlign:'center',
                title:'Seccion',
                headerRight: () => ( botonVivo() )
            }}
        />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps ) => {

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
                    <Icon name="tv-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Programas TV</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('Streams') }>
                    <Icon name="desktop-outline" size={ 25 } color="#2497ff" />
                    <Text style={ styles.menuTexto }>Programas Streams</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ { ...styles.menuBoton, flexDirection:'row' } } onPress={ ()=> navigation.navigate('VivoVideo') }>
                    <Icon name="play-circle-outline" size={ 25 } color="#2497ff" />
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