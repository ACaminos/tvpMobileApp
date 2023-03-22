import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import Video from 'react-native-video';

const { width:Ancho, height:Alto} = useWindowDimensions();


export const vivoTvp = () => {
    console.log('aca estoy vivoTvp')
    console.log('Este es el width: ',Ancho);
    console.log('Este es el Height: ',Alto);
    return (
        <Video
            source={ { uri:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' } }
            // fullscreen={true}
            resizeMode={'cover'}
            style={styles.backgroundVideo}
        />
      )
    }
    
    const styles = StyleSheet.create({
        backgroundVideo: {
            position:'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        }
    })