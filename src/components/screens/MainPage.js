import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  Platform,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Chevron } from "react-native-shapes";
import RNPickerSelect from "react-native-picker-select";
import ScrollableTabView from "react-native-scrollable-tab-view";
import Products from "../../../api/manga_menu.json";
import { Tab } from "../Tab";
import { MainMenuContent } from "./MainMenuContent";
const sports = [
  {
    label: "Алматы",
    value: "football",
  },
  {
    label: "Алматы",
    value: "baseball",
  },
  {
    label: "Алматы",
    value: "hockey",
  },
];
export const MainPage = ({navigation}) => {
  const [favSport3, setFavSport3] = useState({
    label: "Алматы",
    value: "football",
  });
  const [myProduct, setMyProduct] = useState([]);
  const [fullActiveTab,setFullActiveTab] = useState({})
  // const [activeTab, setActiveTab] = useState("Роллы");
  useEffect(() => {
    setMyProduct(Products.groups);
    setFullActiveTab(Products.groups[1])
  }, []);

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeScale = useRef(new Animated.Value(150)).current;
  const fadeOutForAds = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
    }).start();
    Animated.timing(fadeScale, {
      toValue: 0,
      duration: 0,
    }).start();
  };
  const fadeInForAds = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 150,
    }).start();
    Animated.timing(fadeScale, {
      toValue: 150,
      duration: 0,
    }).start();
  };
  return (
    <View style={styles.containerTest}>
      <SafeAreaView style={styles.container}>
        <View style={styles.picker}>
          <RNPickerSelect
            placeholder={{
              label: "Алматы",
              value: null,
            }}
            items={sports}
            onValueChange={(value) => {
              setFavSport3(value);
            }}
            style={{
              inputAndroid: {
                fontSize: 14,
                backgroundColor: "transparent",
                fontFamily: "Dodo",
                color: "#000",
              },
              inputIOS: {
                fontSize: 14,
                fontFamily: "Dodo",
                color: "#000",
              },
              iconContainer: {
                top: Platform.OS == "ios" ? 4 : 12,
              },
            }}
            value={favSport3}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Chevron size={1} color="black" />;
            }}
          />
        </View>

        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={[styles.scrollView, { opacity: fadeAnim, height: fadeScale }]}
        >
          <View style={styles.ImageView}>
            <ImageBackground
              source={require("../../../assets/images/posters/therstpost.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.ImageView}>
            <ImageBackground
              source={require("../../../assets/images/posters/secondpost.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.ImageView}>
            <ImageBackground
              source={require("../../../assets/images/posters/therstpost.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.ImageView}>
            <ImageBackground
              source={require("../../../assets/images/posters/fourth.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.ImageViewoP}>
            <ImageBackground
              source={require("../../../assets/images/posters/five.jpeg")}
              style={styles.image}
            />
          </View>
        </Animated.ScrollView>
      <Text>
      </Text>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.DivView}
        >
          {myProduct.map((item) => (
            <TouchableOpacity
              onPress={() => setFullActiveTab(item)}
              key={item.id}
            >
              <Tab currentActiveTab={fullActiveTab.name} category={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.containerContent}>
          <MainMenuContent
            navigationRemover={navigation}
            currentActiveTab={fullActiveTab}
            data={Products.products}
            functionTransitionFade={fadeOutForAds}
            functionTransitionFadeIn={fadeInForAds}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  containerTest: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImageView: {
    width: 340,
    height: 150,
    marginLeft: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  ImageViewoP: {
    width: 320,
    height: 150,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  picker: {
    width: 70,
    marginTop: 20,
    marginLeft: 18,
  },
  scrollView: {
    height: 150,
    marginTop: 15,
  },
  text: {
    fontSize: 20,
  },
  ek: {},
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  DivView: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  containerContent: {
    height: 470,
    paddingHorizontal: 4,
  },
});
