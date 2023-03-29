import React from 'react'
import { View, FlatList } from 'react-native'

//Resources
import { Card, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

//Data Resources
import News from '../Data/DataNews';

interface Props extends NativeStackScreenProps<any, any>{};

export const HomeScreen = ( { navigation } : Props ) => {
  return (

    <View>
      <FlatList
        data={News}
        renderItem={ ( { item } ) =>
        <Card mode='elevated' style={ { padding:5, borderRadius:0 } }>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant='titleSmall' style={{fontWeight:'bold', marginBottom:10}}>{item.volanta}</Text>
          <Text variant="titleMedium" style={{color:'black', fontSize:25, fontWeight:'bold'}}>{item.Title}</Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>{item.Extract}</Text>
        </Card.Content>
        <Card.Cover style={{marginTop:10}} source={{ uri: `${item.Photo}`} } />
      </Card>
       }
      />
    </View>
  )
}