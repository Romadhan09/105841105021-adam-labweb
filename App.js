import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return(
    <View style={{
      marginTop:400
    }}>

    <View style={{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft:70,
    }}>
      <View style={{
        width:100,
        height:50,
        backgroundColor:'red',
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 20,
          color: 'grey',
          textAlign:'center',
          fontWeight: 'bold',
        }}>Login
        </Text>

      </View>
    </View>
    <View style={{
      flex:1,
      justifyContent:'flex-start',
      alignItems: 'flex-end',
      marginRight: 70
    }}>
      <View style={{
        width:100,
        height:50,
        backgroundColor: 'blue',
        borderRadius:20,
        justifyContent:'center',
      }}>
        <Text style={{
          fontSize:20,
          color:'grey',
          textAlign:'center',
          fontWeight:'bold',
        }}>Sing Up</Text>

      </View>
    </View>
    </View>
 
  )
}


export default App