// import React from 'react'
import { FlatList } from 'react-native'
import { Card, Text } from 'react-native-paper';

//Resources
import Data from '../Data/DataStreams';


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" /> Version resumida de la card

export const Secciones = () => {
  return (
      <FlatList
        data={Data}
        renderItem={ ( { item } ) =>
        <Card mode={item.mode} style={ { padding:5, borderRadius:0 } }>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant="titleLarge" style={{color:'black', fontSize:25, fontWeight:'bold'}}>{item.title} <Text style={{fontSize:20}}>- {item.horario}</Text></Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>{item.text}</Text>
        </Card.Content>
        <Card.Cover style={{marginVertical:10}} source={{ uri: `${item.photo}`} } />
      </Card>
       }
      />
  )
}
