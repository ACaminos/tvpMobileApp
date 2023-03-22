import React, { useEffect, useState } from 'react'
import {View, Text, Button, Switch, StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/core'

// El useNavigation es otra alternativa para hacer navegacion con respecto a HomeScreen

const SettingScreen = () => {

  //Dark Theme
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark(previousState => !previousState);

  //Push Notification
  const [isNotification, setIsNotification] = useState(false);
  const toggleNotification = () => setIsNotification(previousState => !previousState);

  //useNavigator
  const navigator = useNavigation()

  return (
    <View style={{flexDirection:'column', marginHorizontal:20, marginVertical:10}}>
      <View style={styles.viewStyle}>
        <Text style={styles.labelText}>Push Notificaciones</Text>
        <Switch trackColor={{false: 'grey', true:'blue'}} onValueChange={toggleNotification} value={isNotification}/>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.labelText}>Tema Oscuro</Text>
        <Switch trackColor={{false: 'grey', true:'blue'}} onValueChange={toggleSwitch} value={isDark}/>
      </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  viewStyle : {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap:'wrap'
  },
  labelText :{
    color: 'black',
    fontSize:20,
    marginHorizontal:20
  }
})