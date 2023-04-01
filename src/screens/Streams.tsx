import { FlatList, Image } from 'react-native'

//Resources
import { Card, Text } from 'react-native-paper';

//Data Resources
import Data from '../Data/DataStreams';

export const Streams = () => {
  return (
      <FlatList
        data={Data}
        renderItem={ ( { item } ) =>
        <Card mode='contained' style={ { padding:5, borderRadius:0 } }>
        <Card.Content>
          <Text variant="titleLarge" style={ { color:'black', fontSize:25, fontWeight:'bold' } }>
            { item.title }
              <Text style={ { fontSize:20 } }>- { item.horario }</Text>
          </Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>{item.text}</Text>
          <Image source={ item.photo } borderRadius={0} style={ { width:'100%',height:200 } } />
        </Card.Content>
        {/* <Card.Cover style={{marginVertical:10}} source={{ uri: `${item.photo}`} } /> */}
      </Card>
       }
      />
  )
}
