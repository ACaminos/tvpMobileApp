import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native'
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any,any>{};

export const OtherScreen = ({ navigation } : Props ) => {
  return (
    <View>
      <Text style={ styles.title }>OtherScreen</Text>
      <Button
        title='Atras'
        onPress={ () => navigation.pop() }
      />

      <Button
        title='Pagina 1'
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}
