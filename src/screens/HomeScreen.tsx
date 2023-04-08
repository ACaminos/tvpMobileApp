import React, { useState } from 'react'
import { FlatList, SafeAreaView, Image, useWindowDimensions } from 'react-native'

//Resources
import { useEffect } from 'react'
import { Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import HTML from 'react-native-render-html';

//Data Resources
// import News from '../Data/DataNews';

interface Props extends NativeStackScreenProps<any, any>{};

interface Post {
  id: number;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  thumbnail : Image;
  attachments : {
    url: string;
  }
}

export const HomeScreen = ( { navigation } : Props ) => {
  const { width } = useWindowDimensions();
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://new.tvpublica.com.ar/api/get_recent_posts/')
      .then((response) => response.json())
      .then((data) => {
        // Reemplazar las entidades HTML por comillas dobles en los títulos de los posts
        const filterData = data.posts.map( ( post ) => {
          return { ...post };
        });
        setData( filterData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        showsVerticalScrollIndicator ={ false }
        showsHorizontalScrollIndicator = { false }
        renderItem={ ( { item } ) =>
          <Card mode='contained' onPress={ () => (navigation.navigate('newsScreen', {
            titulo : item.title,
            contenido : item.content,
            excerpt : item.excerpt,
            imagen : item.thumbnail,
          }))}>
          <Card.Content>
            {/* <Text variant='titleSmall' style={ { fontWeight:'bold', marginBottom:10 } }>{ ( item.volanta ) }</Text> */}
            {/* <Text variant="titleMedium" style={ { color:'black', fontSize:23, fontWeight:'bold', marginBottom:10 } }>{ ( item.title )}</Text> */}
            <HTML source={{ html: `<span style='fontSize:23px;fontWeight:bold;marginBottom:10px'>${item.title}</span>` }} contentWidth={ width } />
            {/* <Text variant="bodyMedium" style={ { marginVertical:10 } }>{ item.Extract }</Text> */}
            <Image source={{ uri: `${item.thumbnail}?size=medium`}} borderRadius={0} style={{width:'100%',height:250}} />
          </Card.Content>
        </Card>
       }
      />
    </SafeAreaView>
  )
}