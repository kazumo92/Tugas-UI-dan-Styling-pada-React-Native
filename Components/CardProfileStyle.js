import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";



export const s = StyleSheet.create({
   container: {
        backgroundColor: "cyan",
        flexDirection: "row",
        padding:20,
        borderRadius: 10,
        backgroundColor:"#fff",
        shadowColor: "#000",

shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.30,
shadowRadius: 4.65,
elevation: 8,
   },
   avatar: {
   height: 70,
   width: 70,
   borderRadius: 35,
   },

   header:{
    flexDirection:"row",
   },

   body: {
    paddingLeft: 15,
   },

   name:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,

   },

social: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 0,
    flex:1,
    backgroundColor: "green",
},


 btnSocial: {
    backgroundColor:"#eee",
    borderRadius: 40,
    padding:10,
   },

});