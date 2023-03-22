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
        paddingHorizontal: 12,
        marginRight:15
      },
      appButtonText: {
        color: "#fff",
        fontWeight: "bold"
      },
      //End styles button header vivo
    backgroundVideo: {
      position:'absolute',
      width:'100%',
      height: 500
    //   top: 0,
    //   left: 0,
    //   bottom: 0,
    //   right: 0,
  }
})