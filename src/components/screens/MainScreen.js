import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {createStackNavigator} from '@react-navigation/stack'
import { MainPage } from "./MainPage";
import { ProductItem } from "./ProductItem";

const Stack = createStackNavigator()
export const MainScreen = () => {
    
      return(
       <Stack.Navigator  headerMode="screen">
           <Stack.Screen name="mainmenu" component={MainPage} options={{headerShown:false}}/>
           <Stack.Screen name="productItem" component={ProductItem} options={({ route }) => ({ title: route.params.name, headerBackTitleVisible:false,  headerTitleStyle: {fontFamily: 'Dodo'}, })}/>
       </Stack.Navigator>
      )
};
const styles = StyleSheet.create({
});
