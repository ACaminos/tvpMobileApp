import { FlatList, View, Text, Dimensions, Image } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

//Data Resources
import { DataSecciones } from '../Data/DataSecciones';

const windowWidth = Dimensions.get('window').width/2;

export const Secciones = ( { navigation } ) => {
  return (
      <View>
          <FlatList
            numColumns={2}
            data={DataSecciones}
            renderItem={ ( { item } ) => (
              <TouchableOpacity style={ { flex: 1, width:windowWidth } }>
                <Card style={ { margin: 10, borderRadius:0 } }>
                    <Card.Cover style={ { marginBottom:10 } } source={`${item.photo}`} />
                    <Text>{ item.Titulo }</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
      </View>
  )
}