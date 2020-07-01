import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CartMain } from "./CartMain";  

const Stack = createStackNavigator();
export const Cart = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="cartMain" component={CartMain}  options={{title:'Корзина'}}/>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({

});
