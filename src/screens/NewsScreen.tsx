import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';


export default function NewsScreen( { route, navigation } ) {
  const { volanta, titulo, extracto, foto, Texto } = route.params;
  // console.log ('aca va el texto',Texto)
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={ {...styles.globalMargin, marginVertical:10 } }>
      <Text style={ styles.volantaNews }>{ volanta }</Text>
      <Text style={ styles.titleNews }>{ titulo }</Text>
      <Image source={ { uri: foto } } borderRadius={0} style={{width:'100%', height:300, resizeMode:'stretch'}} />
      <Text style={ styles.extractoNews }>{ extracto }</Text>
      <Text style={ { ...styles.textBodyNews, color:'black'} }>{ Texto }</Text>
    </ScrollView>
  )
}