import { FlatList } from 'react-native'

//Resources
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';

//Data Resources
import { DataSecciones } from '../Data/DataSecciones';

export const Secciones = ( { navigation } ) => {
  return (
      <FlatList
        data={DataSecciones}
        renderItem={ ( { item } ) =>
        <TouchableOpacity onPress={ () => navigation.navigate('Seccion', { titulo : item.Titulo})}>
          <List.Section style={{display:'flex', justifyContent:'center', alignContent:'center', marginLeft:15}}>
            {/* <List.Subheader></List.Subheader> */}
            <List.Item title={item.Titulo} left={() => <Icon name="chevron-forward-outline" size={ 25 } color="#2497ff" />} />
          </List.Section>
        </TouchableOpacity>
      }
      />
  )
}