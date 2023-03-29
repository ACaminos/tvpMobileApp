import React from 'react'
import { FlatList, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'

//Resources
import { Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Data Resources
import News from '../Data/DataNews';

interface Props extends NativeStackScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView>
      <FlatList
        data={News}
        renderItem={ ( { item } ) =>
        <Card mode='contained' onPress={()=>( navigation.navigate('newsScreen', {
          volanta : item.volanta,
          titulo : item.Title,
          extracto : item.Extract,
          foto : item.Photo,
          Texto : item.Texto,
        }))}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercion forma resumida de la card */}
        <Card.Content>
          <Text variant='titleSmall' style={ { fontWeight:'bold', marginBottom:10 } }>{ ( item.volanta ).toUpperCase() }</Text>
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