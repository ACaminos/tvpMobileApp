import React from 'react'
import { Image, ScrollView, useWindowDimensions } from 'react-native'

//Resources
import HTML from 'react-native-render-html'

//Styles
import { styles } from '../theme/appTheme';

export default function NewsScreen( { route } ) {
  const { width } = useWindowDimensions();

  const { titulo, contenido, excerpt, imagen } = route.params;
  // console.log ('aca va el texto',Texto)
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={ {...styles.globalMargin, marginVertical:10 } }>
      {/* <Text style={ styles.volantaNews }>{ volanta }</Text> */}
      {/* <Text style={ styles.titleNews }>{ titulo }</Text> */}
      <HTML source={{ html: `<span style='fontSize:23px; fontWeight:bold; marginBottom:10px'>${titulo}</span>`}} contentWidth={ width } />
      <Image source={ { uri: imagen } } borderRadius={0} style={{width:'100%', height:300, resizeMode:'stretch'}} />
      <HTML source={{ html: `<span style='fontSize:15px'>${excerpt}</span> ` }} contentWidth={ width } />
      {/* <Text style={ styles.extractoNews }>{ excerpt }</Text> */}
      <HTML source={{ html: `<span style='fontSize:20px'>${ contenido }</span> `}} contentWidth={ width } />
      {/* // <Text style={ { ...styles.textBodyNews, color:'black'} }>{ contenido }</Text> */}
    </ScrollView>
  )
}