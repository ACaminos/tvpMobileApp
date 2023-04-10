import React, { useCallback, useState } from 'react'
import { FlatList, SafeAreaView, Image, useWindowDimensions, ScrollView, RefreshControl } from 'react-native'

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
  thumbnail_images : {
      full : {
        url : string;
      }
    }
}

export const HomeScreen = ( { navigation } : Props ) => {
  const { width } = useWindowDimensions();
  const [ refreshing, setRefreshing ] = useState(false)
  const [data, setData] = useState<Post[]>([]);

  const fetchData = () => {
    setRefreshing(true);
    fetch('https://new.tvpublica.com.ar/api/get_recent_posts/')
      .then(  response => response.json() )
      .then(  data => setData(  data.posts  ) )
      .catch( error => console.error( error ) )
      .finally( () => setRefreshing(  false ) );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={fetchData} />  }>
.
        <FlatList
          data={data}
          showsVerticalScrollIndicator ={ false }
          showsHorizontalScrollIndicator = { false }
          renderItem={ ( { item } ) =>
            <Card mode='contained' onPress={ () => (navigation.navigate('newsScreen', {
              titulo : item.title,
              contenido : item.content,
              excerpt : item.excerpt,
              imagen : item.thumbnail_images.full.url,
              }
            )
            )}>
            <Card.Content>
              {/* <Text variant='titleSmall' style={ { fontWeight:'bold', marginBottom:10 } }>{ ( item.volanta ) }</Text> */}
              {/* <Text variant="titleMedium" style={ { color:'black', fontSize:23, fontWeight:'bold', marginBottom:10 } }>{ ( item.title )}</Text> */}
              <HTML source={{ html: `<span style='fontSize:23px;fontWeight:bold;marginBottom:10px'>${item.title}</span>` }} contentWidth={ width } />
              {/* <Text variant="bodyMedium" style={ { marginVertical:10 } }>{ item.Extract }</Text> */}
              <Image source={{ uri: `${item.thumbnail_images.full.url}?size=medium`}} borderRadius={0} style={{width:'100%',height:250}} />
            </Card.Content>
          </Card>
        }
        />
      </ScrollView>
    </SafeAreaView>
  )
}