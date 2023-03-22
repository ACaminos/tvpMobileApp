import React from 'react'
import { View, Text, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={ { color:'black' } }>HomeScreen</Text>
      {/* <Button title='Ir a Settings' onPress={ () => navigation.navigate('SettingScreen')} /> */}
      {/* Dentro del navigate, se pone el name no el component que esta en StackNavigator */}
    </View>
  )
}