import React from 'react'
import { View ,Image, Text, ScrollView, useWindowDimensions, StatusBar, Platform } from 'react-native'

//Resources
import HTML from 'react-native-render-html'
import YoutubePlayer from 'react-native-youtube-iframe'

//Styles
import { styles } from '../theme/appTheme';

export default function NewsScreen( { route } ) {

  const { width } = useWindowDimensions();

  const { titulo, contenido, excerpt, imagen, volanta, video } = route.params;

  var videoYouTube = null;
  var videoId;

    //Se verifica si video trae url o es undefined o null, si tiene algo, se limpia la url para conseguir el ID, caso contrario, se lo deja como null para que haga la siguiente condicion para ver si se pone imagen o video dentro del articulo.
  if (video != undefined || null){

    //Se extrae la url del video como array en posicion 0, ya que sin usar la posicion, nos devuelve la url entre corchetes
    videoYouTube = video[0]

    //Se hace un borrado en la url para obtener el ID de youTube y se guarda en videoId
   const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.{11})/;
   const match = videoYouTube.match(regex);
   videoId = match ? match[1] : '';

 } else{
    videoId = null
 }

  return (
    <View style={{flex:1}}>
      <StatusBar barStyle={ 'light-content' } backgroundColor={ 'blue' } animated={ true } hidden={ false } />
      <ScrollView overScrollMode={'never'} showsVerticalScrollIndicator={  false } showsHorizontalScrollIndicator={ false  } style={ { ...styles.globalMargin, marginVertical:10, flex:1 } }>
        <Text style={ styles.volanta }>{ volanta }</Text>
        <HTML source={{ html: `<span style='fontSize:23px; fontWeight:bold; marginBottom:10px'>${ titulo }</span>`}} contentWidth={ width } />
        {
          video != undefined && video != null ?
            <YoutubePlayer height={ Platform.OS == 'android' ? 260 : 200 } videoId={ videoId } />
              :
            <Image source={ { uri: imagen } } borderRadius={ 0 } style={ styles.articleImage } />
        }
        <HTML source={ { html: `${ excerpt }` } } contentWidth={ width } />
        <HTML source={  { html: `<span style='fontSize:20px'>${ contenido }</span> `} } ignoredDomTags={ ['iframe'] } contentWidth={ width } />
        {/* <HTML source={  { html: `<span style='fontSize:20px'>${ contenido }</span> `} } customHTMLElementModels={  { iframe: iframeModel } } contentWidth={ width } /> */}
      </ScrollView>
    </View>
  )
}