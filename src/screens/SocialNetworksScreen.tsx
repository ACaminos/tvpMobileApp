import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';

//Styles
import { styles } from '../theme/appTheme'

export default function SocialNetworksScreen() {
  return (
    <View style={styles.menuContainer}>
        <Text style={{color:'black', textAlign:'left', fontSize:20, fontWeight:'bold', marginBottom:20}}>Seguinos en :</Text>
        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row'}} onPress={ ()=> { Linking.openURL( 'https://www.facebook.com/TVPublica/' ) } }>
            <Icon name="logo-facebook" size={ 25 } color="#000" />
            <Text style={styles.menuTexto}>Facebook</Text>
        </TouchableOpacity>

        <Divider/>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row'}} onPress={ ()=> { Linking.openURL( 'https://www.instagram.com/tv_publica/' ) } }>
            <Icon name="logo-instagram" size={ 25 } color="#000" />
            <Text style={styles.menuTexto}>Instagram</Text>
        </TouchableOpacity>

        <Divider/>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row'}} onPress={ ()=> { Linking.openURL( 'https://twitter.com/tv_publica' ) } }>
            <Icon name="logo-twitter" size={ 25 } color="#000" />
            <Text style={styles.menuTexto}>Twitter</Text>
        </TouchableOpacity>

        <Divider/>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row'}} onPress={ ()=> { Linking.openURL( 'https://www.youtube.com/user/TVPublicaArgentina' ) } }>
            <Icon name="logo-youtube" size={ 25 } color="#000" />
            <Text style={styles.menuTexto}>Youtube</Text>
        </TouchableOpacity>

        <Divider/>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:'row'}} onPress={ ()=> { Linking.openURL( 'https://twitch.tv/tvpublica' ) } }>
            <Icon name="logo-twitch" size={ 25 } color="#000" />
            <Text style={styles.menuTexto}>Twitch</Text>
        </TouchableOpacity>

        <Divider/>
    </View>
  )
}