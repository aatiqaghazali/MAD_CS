import { Button, StyleSheet, Text, View,TextInput , TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
export default function App() {
  
  return (
    <>
    <View style={styles.parentContainer}>
   
    <TouchableOpacity style={styles.shadow}>
   <Text>Hello</Text>

   </TouchableOpacity>
    
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  
  shadow:{
    backgroundColor:'grey',
    padding:10,
  },
  parentContainer:
  {
    
   
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

   
    
    
  
  
});
