import React, { useState } from 'react'
import {View, Text, Switch, StyleSheet} from 'react-native'

//Resources
import {useNavigation} from '@react-navigation/core'
import { ToggleButton } from 'react-native-paper';

// El useNavigation es otra alternativa para hacer navegacion con respecto a HomeScreen

const SettingScreen = () => {

  //Dark Theme
  const [isDark, setIsDark] = useState(false);

  //Push Notification
  const [isPush, setIsPush] = useState(false);

  //useNavigator
  const navigator = useNavigation()

  //Arrow function toggles
  const onToggleSwitchPush = () => setIsPush(!isPush);

  const onToggleSwitchDark = () => setIsDark(!isDark);

  return (
    <View style={{flexDirection:'column', marginHorizontal:20, marginVertical:10}}>
      <View style={styles.viewStyle}>
        <Text style={{...styles.labelText, verticalAlign:'middle'}}>Push Notificaciones</Text>
        <Switch value={isPush} onValueChange={onToggleSwitchPush} />
      </View>
      <View style={styles.viewStyle}>
        <Text style={{...styles.labelText, verticalAlign:'middle'}}>Modo Oscuro</Text>
        <Switch value={isDark} onValueChange={onToggleSwitchDark} />
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