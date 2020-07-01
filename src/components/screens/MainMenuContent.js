import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Item } from "./Item";


export const MainMenuContent = ({data,currentActiveTab,functionTransitionFade,functionTransitionFadeIn,navigationRemover}) => {
  const scrollControlTest =(e)=>{
    if(e.nativeEvent.contentOffset.y > 5){
      functionTransitionFade()
    }
    else{
      functionTransitionFadeIn()
    }
  }
      return(
      <FlatList initialNumToRender={3} onScroll={scrollControlTest} showsVerticalScrollIndicator={false} data={data.filter(item=>item.parentGroup == currentActiveTab.id)} keyExtractor={item=>item.id} renderItem={({item})=><Item navigationRemoverIn={navigationRemover} menuItem={item}/>}/>
      )
};
const styles = StyleSheet.create({

});
