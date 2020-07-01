import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {MainProfile} from './MainProfile'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const Profile = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="profiler" component={MainProfile}  options={{title:"Профиль"}}/>
    </Stack.Navigator>
  
  );
};
const styles = StyleSheet.create({

});
