import React, { useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

//Resources
import { Video, ResizeMode } from 'expo-av';

//resourse m3u8
//https://gist.github.com/Fazzani/8f89546e188f8086a46073dc5d4e2928

const VivoVideo = () => {
    const video = React.useRef(null);
    const [status, setStatus] = useState({});

    const { width:ancho, height:alto } = useWindowDimensions()

  return (
    <View style={ styles.container  }>
      <Video
        ref={ video  }
        style={ { ...styles.video, width:ancho, height:'50%' } } //height:alto
        source={  { uri: 'http://190.2.58.88:8081/tvpmobiles/tvp_mobile_test/playlist.m3u8' } }
        useNativeControls={ true }
        resizeMode={  ResizeMode.CONTAIN  }
        isLooping
        volume={  1.0 }
        onPlaybackStatusUpdate={  status => setStatus(  () => status  ) }
      />
    </View>
  );
}

export default VivoVideo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    // height: 500,
    position:'absolute',
    bottom:'35%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
