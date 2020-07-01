import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,

} from "react-native";

export const Tab = ({ category, currentActiveTab }) => {
  return (
    <View
      style={[
        styles.tabItem,
        {
          backgroundColor:
            currentActiveTab == category.name ? "#FFF0E5" : "#F3F3F7",
        },
      ]}
    >
      <Text
        style={[
          styles.tabCategory,
          { color: currentActiveTab == category.name ? "#C46B3C" : "#333" },
        ]}
      >
        {category.name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tabItem: {
    width: 100,
    height: 40,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  tabCategory: {
    fontFamily: "Dodo",
    color: "#333",
  },
});
