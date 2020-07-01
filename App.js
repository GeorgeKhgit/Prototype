import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import store from "./store";
import { MyApp } from "./src/components/MyApp";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { AppLoading } from "expo";


async function loadApplication() {
  await Font.loadAsync({
    Dodo: require("./assets/fonts/98866ae6fb597012bd53.ttf"),
  });
}
export default function App() {
  const [isLoadingF, setIsLoadingF] = useState(false);
  if (!isLoadingF) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsLoadingF(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

const styles = StyleSheet.create({});
