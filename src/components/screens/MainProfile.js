import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";


export const MainProfile = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.TextCenterProfile}>
            Войти в личный кабинет
        </Text>
        <TextInput style={{borderWidth:1, borderColor:'#E2E2E9', height:45, marginTop:15, borderRadius:7, fontFamily:'Dodo', color:'#333'}}/>
        <TouchableOpacity>
          <View style={styles.buttonReadyTest}>
            <Text style={styles.textButtonReady}>
              Готово
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={{textAlign:'center', marginTop:10, fontFamily:'Dodo',fontSize:15}}>
        На указанный номер мы пришлём код подтверждения
        </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textButtonReady:{
    color:'#fff',
    fontFamily:'Dodo',
    fontSize:19,
   
  },  
  buttonReadyTest:{
    backgroundColor:'#F75B00',
    paddingVertical:16,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:7
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding:20
  },
  TextCenterProfile:{
      textAlign:'center',
      fontFamily:'Dodo',
      fontSize:18,
      paddingTop:100
  }
});
