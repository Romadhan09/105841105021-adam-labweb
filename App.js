import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return(
    <View style={{
      flex:1,
      marginTop:300
    }}>

    
    <View style={{
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        width:100,
        height:100,
        backgroundColor:'red',
      }}>
      </View>
    </View>
    <View style={{
      //flex:1,
      justifyContent:'center',
      alignItems: 'center',
    }}>
      <View style={{
        width:100,
        height:100,
        backgroundColor: 'blue',
      }}>

      </View>
    </View>
    </View>
 
  )
}


export default App