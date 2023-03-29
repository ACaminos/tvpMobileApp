import React from 'react'
import { ScrollView } from 'react-native'
import {styles} from '../theme/appTheme'
import { Avatar, Button, Card, Text } from 'react-native-paper';


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" /> Version resumida de la card

export const Secciones = () => {
  return (
    <ScrollView>
      <Card mode='contained' style={ { padding:5, borderRadius:0 } }>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant="titleLarge">Hola Pais</Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>
            Tania Wedeltoft y Mariano Angarolla proponen un encuentro que va de la conversación sobre temas cotidianos
            hasta el repaso de noticias raras o absurdas de todo el país, con una mirada atenta a los temas de agenda en los medios y las redes.
          </Text>
        </Card.Content>
        <Card.Cover style={{marginVertical:10}} source={{ uri: 'https://i.ytimg.com/vi/VlVUqNkgbM8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6E4kvRVCAMYh8cj48QnZQg8RkHw' }} />
      </Card>

      <Card mode='contained' style={{borderRadius:0}}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant="titleLarge">Abro Hilo</Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>
            Con la conducción de Sol Despeinada y Juan Manuel Cafferata, Abro Hilo es un espacio en construcción y, al mismo tiempo, en deconstrucción.
            Una puerta de entrada a poner en jaque las ideas.
          </Text>
        </Card.Content>
        <Card.Cover style={{marginVertical:10}} source={{ uri:'https://i.ytimg.com/vi/3WR0GGi97QI/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYXCAwKH8wDw==&rs=AOn4CLDByy4PwF9NVOCJZ0bi6jwI74QTjg' }} />
      </Card>

      <Card mode='contained' style={{borderRadius:0}}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant="titleLarge">AG3</Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>
            Con el objetivo de federalizar, democratizar y masificar el ajedrez, Ag3 abre el mundo de este deporte a todo el país.
            La maestra internacional, actual y pentacampeona argentina, María Florencia Fernández y el actor y aficionado Julián Doregger recorren la historia del ajedrez, sus referentes y las más diversas jugadas.
          </Text>
        </Card.Content>
        <Card.Cover style={{marginVertical:10}} source={{ uri: 'https://new.tvpublica.com.ar/wp-content/uploads/2022/11/Ag3-en-vivo.jpg' }} />
      </Card>

      <Card mode='contained' style={{borderRadius:0}}>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> insercino forma resumida de la card */}
        <Card.Content>
          <Text variant="titleLarge">UPP - Un poco perdidos</Text>
          <Text variant="bodyMedium" style={{marginVertical:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Text>
        </Card.Content>
        <Card.Cover style={{marginVertical:10}} source={{ uri: 'https://instagram.faep24-2.fna.fbcdn.net/v/t51.2885-15/337910097_1238309710133215_8862799461841815998_n.jpg?stp=c0.420.1080.1080a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.faep24-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=uGJ6mV_L8R8AX8DEqNE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCVSJSRa87yEofLf9Kv4wjZYYWjT29G06vd8GlAtpZ6Yg&oe=6424AB9C&_nc_sid=8fd12b' }} />
      </Card>
    </ScrollView>
  )
}
