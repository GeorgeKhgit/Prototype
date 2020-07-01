import React, { useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Button,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Contact = () => {
  const rollTrash = async () => {
    await WebBrowser.openBrowserAsync(
     "https://2gis.kz/almaty/firm/9429940000788570"
    );
  };
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} />
      <View style={styles.absoluteLinkDeep}>
        <TouchableOpacity onPress={()=>rollTrash()}>
          <Text style={styles.absoulteText}>
            Все наши рестораны
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  absoulteText:{
    fontFamily:'Dodo',
    color:'#333',
    fontSize:18
  },
  absoluteLinkDeep: {
    position:'absolute',
    bottom:0,
    width:'100%',
    height:60,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
