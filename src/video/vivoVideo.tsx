import * as React from 'react';
import { View, StyleSheet, Button, Dimensions, useWindowDimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

//resourse m3u8
//https://gist.github.com/Fazzani/8f89546e188f8086a46073dc5d4e2928

const VivoVideo = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const {width:ancho, height:alto} = useWindowDimensions()

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={{...styles.video, width:ancho, height:alto, }}
        source={{
          uri: 'https://assets.afcdn.com/video49/20210722/v_645516.m3u8',
        }}
        useNativeControls={true}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
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
