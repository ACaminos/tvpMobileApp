import React from 'react'
import { Image, Text, ScrollView, useWindowDimensions, StatusBar } from 'react-native'

//Resources
import HTML from 'react-native-render-html'
import { Video, ResizeMode } from 'expo-av';
import WebView from 'react-native-webview'
import YoutubePlayer from 'react-native-youtube-iframe'


//Styles
import { styles } from '../theme/appTheme';

export default function NewsScreen( { route } ) {

  const { width } = useWindowDimensions();

  const { titulo, contenido, excerpt, imagen, volanta, video } = route.params;

 console.log(video[0])

 //Se extrae la url del video como array en posicion 0, ya que sin usar la posicion, nos devuelve la url entre corchetes
 const otroVideo = video[0]

 //Se hace un borrado en la url para obtener el ID de youTube y se guarda en videoId
 const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.{11})/;
 const match = otroVideo.match(regex);
 const videoId = match ? match[1] : '';

//  console.log('aca estoy', videoId)


  return (
    <>
      <StatusBar barStyle={ 'light-content' } backgroundColor={ 'blue' } animated={ true } hidden={ false } />
      <ScrollView showsVerticalScrollIndicator={  false } showsHorizontalScrollIndicator={ false  } style={ { ...styles.globalMargin, marginVertical:10 } }>
        <Text style={ styles.volanta }>{ volanta }</Text>
        <HTML source={{ html: `<span style='fontSize:23px; fontWeight:bold; marginBottom:10px'>${ titulo  }</span>`}} contentWidth={ width } />
        {
          videoId == undefined || null ?
            <Image source={ { uri: imagen } } borderRadius={ 0 } style={ styles.articleImage } />
              :
            <YoutubePlayer height={250} videoId={videoId} width={width} />
        }

        <HTML source={{ html: `<span style='fontSize:15px'>${ excerpt }</span> ` }} contentWidth={ width } />

          {/* <HTML source={  { html: `<span style='fontSize:20px'>${ contenido }</span> `} } ignoredDomTags={ ['iframe'] } contentWidth={ width } /> */}
          <HTML source={  { html: `<span style='fontSize:20px'>${ contenido }</span> `} } customHTMLElementModels={  { iframe: iframeModel } } contentWidth={ width } />
      </ScrollView>
    </>
  )
}