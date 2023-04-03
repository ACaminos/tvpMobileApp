import React, { useState } from 'react'
import { FlatList, SafeAreaView, Image } from 'react-native'

//Resources
import { useEffect } from 'react'
import { Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Data Resources
import News from '../Data/DataNews';
import { api } from '../axios/api'; //sin usar por el momento

interface Props extends NativeStackScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  const [Data, setData] = useState()

  const getApi = async () => {
    try {
      // const response = await fetch ('https://new.tvpublica.com.ar/api/get_recent_posts/');
      const response = await fetch ('https:\/\/api.tvpublica.com.ar');
      const json = await response.json();
      // setData(json.posts)
      // console.log('aca estoy',json.acf.layout)
      const news = json.acf.layout
      // console.log('ACAAAAAAAA :', news)
      const { titulo, componente} = news
    }catch(e){
      console.error(e)
    }
  }

  useEffect(() => {
    // fetch('https://new.tvpublica.com.ar/wp-json/wp/v2/pages/2/')
    // fetch('https://new.tvpublica.com.ar/api/')
    // fetch('https://new.tvpublica.com.ar/api/get_recent_posts/')
    // .then(res => res.json())
    // .then(res => console.log(res.posts[0].title))
    // .then(res => console.log(res.acf))

    getApi()

  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={News}
        renderItem={ ( { item } ) =>
        <Card mode='contained' onPress={ ()=>( navigation.navigate('newsScreen', {
          volanta : item.volanta,
          titulo : item.Title,
          extracto : item.Extract,
          foto : item.Photo,
          Texto : item.Texto,
        }))}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercion forma resumida de la card */}
        <Card.Content>
          <Text variant='titleSmall' style={ { fontWeight:'bold', marginBottom:10 } }>{ ( item.volanta ) }</Text>
          <Text variant="titleMedium" style={ { color:'black', fontSize:25, fontWeight:'bold' } }>{ item.Title }</Text>
          <Text variant="bodyMedium" style={ { marginVertical:10 } }>{ item.Extract }</Text>
          <Image source={{ uri: `${item.Photo}`}} borderRadius={0} style={{width:'100%',height:200}} />
        </Card.Content>
        {/* <Card.Cover style={ { marginTop:5, overflow:'hidden', backgroundColor:'red' } } source={ { uri: `${item.Photo}`} } /> */}
      </Card>
       }
      />
    </SafeAreaView>
  )
}