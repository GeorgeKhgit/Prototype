import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const Item = ({ menuItem, navigationRemoverIn }) => {
  const goToItemInfo = (itemProduct)=>{
    navigationRemoverIn.navigate('productItem',{
      itemInfo: itemProduct,
      name: itemProduct.name
    })
  }
  return (
    <TouchableOpacity onPress={()=>{goToItemInfo(menuItem)}}>
       <View style={styles.itemBlock}>
      <View>
        { menuItem.images && menuItem.images[0]  ? (
          <Image
            style={styles.media}
            source={{
              uri: menuItem.images[0].imageUrl,
            }}
          />
        ) : (
          <View style={styles.emptyImages}></View>
        )}
      </View>
      <View style={styles.contentContex}>
        <Text style={styles.contextText}>{menuItem.name}</Text>
        <Text style={styles.contextDescript}>{menuItem.description}</Text>
        <TouchableOpacity onPress={()=>{goToItemInfo(menuItem)}}>
          <View style={styles.buttonItem}>
            <Text style={{fontFamily:'Dodo',color:'#FF6F21'}}>
              {menuItem.price} тг
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonItem: {
      borderWidth:1,
      borderColor:'#FF7D5D',
      paddingVertical:7,
      paddingHorizontal:15,
      marginLeft:'auto',
      marginRight:10,
      marginTop:10,
      alignItems:'center',
      borderRadius:5
      
  },
  emptyImages: {
    width: 150,
    height: 110,
    backgroundColor: "#333",
  },
  itemBlock: {
    height: 'auto',
    marginBottom:5,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContex: {
    flexGrow: 1,
    flex: 1,
    marginLeft: 10,
  },
  media: {
    width: 150,
    height: 150,
  },
  contextText: {
    fontFamily: "Dodo",
    
  },
  contextDescript: {
    marginTop: 5,
    color:'rgba(0,0,0,0.5)',
    fontSize:13
  },

});
