import React from 'react';
import { Image, FlatList, View } from 'react-native'

//Resources
import { Appbar, Card, Text } from 'react-native-paper';

//Data Resources
import Data from '../Data/DataStreams';

export default function Seccion( {route, navigation } ) {
    const { titulo } = route.params
  return (
    <View>
            <Appbar.Header mode='center-aligned' style={{marginTop:-40, backgroundColor:'#e8e1ed', borderBottomColor:'black', borderBottomWidth:1}}>
                <Appbar.BackAction onPress={ () => navigation.goBack() } />
                <Appbar.Content title={titulo} />
                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
                {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
            </Appbar.Header>
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
    </View>

  )
}