import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
      marginHorizontal:20
    },
    menuContainer:{
      marginVertical: 30,
      marginHorizontal:25,
    },
    title:{
      fontSize: 30,
      color: 'black',
      marginBottom: 20
    },
    menuTexto:{
        fontSize:20,
        color:'black',
        marginLeft:10
    },
    menuBoton:{
      marginVertical:10,
    },
    avatarContainer:{
      alignItems:'center',
      marginTop: 20,
    },
    avatar:{
      width:150,
      height:150
    },
    //Start styles button header vivo
    appButtonContainer: {
      elevation: 8,
      backgroundColor:'#DC343C',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 17,
      },
    appButtonText: {
      color: "#fff",
      fontWeight: "bold",
      },
    //End styles button header vivo
    backgroundVideo: {
      position:'absolute',
      width:'100%',
      height: 500
  },
    //Start Styles news
    titleNews : {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'left',
      marginBottom : 10,
  },
    textBodyNews : {
      color : 'black',
      fontSize : 15,
      textAlign : 'left',
      lineHeight: 25,
  },
    volantaNews : {
      color : 'black',
      fontSize: 15,
      fontWeight : 'bold',
      textAlign: 'left',
  },
    extractoNews : {
      color : 'black',
      fontSize : 13 ,
      textAlign : 'justify',
      marginBottom: 15,
      lineHeight: 20,

  }
    //End Styles news

})