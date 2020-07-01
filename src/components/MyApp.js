import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile } from "./screens/Profile";
import { Contact } from "./screens/Contact";
import { Cart } from "./screens/Cart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MainScreen } from "./screens/MainScreen";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../actions";


export const MyApp = () => {
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "black",
    },
  };
  useEffect(() => {
    dispatch(updateCart());
  }, []);
  const country = useSelector((state) => state.cartCount);
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          style: { height: 50 },
          labelStyle: { fontSize: 13, fontFamily: "Dodo" },
        }}
      >
        <Tab.Screen
          name="main"
          component={MainScreen}
          options={{
            tabBarLabel: "Меню",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="silverware"
                color={color}
                size={27}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{
            tabBarLabel: "Профиль",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={27} />
            ),
          }}
        />
        <Tab.Screen
          name="contact"
          component={Contact}
          options={{
            tabBarLabel: "Контакты",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="map-marker"
                color={color}
                size={27}
              />
            ),
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarLabel: "Корзина",
            tabBarIcon: ({ color }) => (
              <View style={{ position: "relative" }}>
                {country > 0 && (
                  <View
                    style={{
                      position: "absolute",
                      right: -7,
                      zIndex: 2,
                      width: 18,
                      borderRadius: 100,
                      height: 18,
                      backgroundColor: "red",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#fff",
                        paddingLeft: Platform.OS == "ios" ? 1 : 0,
                      }}
                    >
                      {country}
                    </Text>
                  </View>
                )}
                <MaterialCommunityIcons name="cart" color={color} size={27} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
