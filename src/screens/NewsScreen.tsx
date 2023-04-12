import React from 'react'
import { Image, Text, ScrollView, useWindowDimensions, StatusBar } from 'react-native'

//Resources
import HTML from 'react-native-render-html'

//Styles
import { styles } from '../theme/appTheme';

export default function NewsScreen( { route } ) {
  const { width } = useWindowDimensions();

  const { titulo, contenido, excerpt, imagen, volanta } = route.params;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={ 'blue' } animated={ true } hidden={false} />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={ {...styles.globalMargin, marginVertical:10 } }>
        <Text style={styles.volanta}>{ volanta }</Text>
        <HTML source={{ html: `<span style='fontSize:23px; fontWeight:bold; marginBottom:10px'>${titulo}</span>`}} contentWidth={ width } />
        <Image source={ { uri: imagen } } borderRadius={0} style={styles.articleImage} />
        <HTML source={{ html: `<span style='fontSize:15px'>${excerpt}</span> ` }} contentWidth={ width } />
        <HTML source={{ html: `<span style='fontSize:20px'>${ contenido }</span> `}} contentWidth={ width } />
      </ScrollView>
    </>
  )
}