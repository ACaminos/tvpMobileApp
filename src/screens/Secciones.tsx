import { FlatList, Text, Dimensions, SafeAreaView } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';

//Data Resources
import { DataSecciones } from '../Data/DataSecciones';

const windowWidth = Dimensions.get('window').width/2;

export const Secciones = ( { navigation } ) => {
  return (
      <SafeAreaView>
          <FlatList
            numColumns={2}
            data={DataSecciones}
            renderItem={ ( { item } ) => (
              <TouchableOpacity style={ { flex: 1, width:windowWidth } }>
                <Card style={ { margin: 10, borderRadius:0, padding:10 } } onPress={ () => (  navigation.navigate(  'Seccion', { titulo : item.Titulo } ) ) }>
                    <Card.Cover source={`${item.photo}`} />
                    <Text style={{marginTop:10}}>{ item.Titulo }</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
      </SafeAreaView>
  )
}