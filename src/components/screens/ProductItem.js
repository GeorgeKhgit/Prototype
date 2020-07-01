import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { addItemToCart } from "../../../actions";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

export const ProductItem = ({ route }) => {
  const { itemInfo } = route.params;
  const dispatch = useDispatch();
  const addToCart = (itemToCart) => {
    itemToCart = { ...itemToCart, countItem: 1 };
    dispatch(addItemToCart(itemToCart))
  };
  return (
    <ScrollView style={styles.container}>
      {itemInfo.images && itemInfo.images[0] && (
        <Image
          style={{
            width: "90%",
            height: 200,
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          source={{ uri: itemInfo.images[0].imageUrl }}
        />
      )}

      <View style={styles.flextite}>
        <Text numberOfLines={1} style={styles.titleGunkan}>
          {itemInfo.name}
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            
            name="information-outline"
            color="#333333"
            size={21}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionL}>
          8 шт, {itemInfo?.fatFullAmount} ккал.
        </Text>
        <Text style={styles.discriptionLolkek}>{itemInfo?.description}</Text>
      </View>
      <View style={styles.blockWithDetailInfo}>
        <Text style={styles.blockWithDetailInfoText}>
          Энергетический вес: {itemInfo?.energyAmount}
        </Text>
        <Text style={styles.blockWithDetailInfoText}>
          Полный энергетический вес: {itemInfo?.energyFullAmount}
        </Text>
        <Text style={styles.blockWithDetailInfoText}>
          Последнее обновление: {itemInfo?.images[0]?.uploadDate}
        </Text>
        <Text style={styles.blockWithDetailInfoTexte}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          delectus repellendus quasi doloremque doloribus eligendi praesentium,
          at temporibus beatae voluptatem repellat dolore facere quod quibusdam
          magnam fuga vitae, tempora ratione!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          addToCart(itemInfo);
        }}
      >
        <View style={styles.poStButton}>
          <Text style={styles.poStButtonText}>
            В корзину за {itemInfo?.price} тг
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  blockWithDetailInfoText: {
    fontFamily: "Dodo",
    marginTop: 5,
    fontSize: 15,
    color: "rgba(0,0,0,0.6)",
  },
  blockWithDetailInfoTexte: {
    fontFamily: "Dodo",
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
  blockWithDetailInfo: {
    marginTop: 10,
  },
  poStButtonText: {
    fontFamily: "Dodo",
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
    paddingVertical: 13,
  },
  poStButton: {
    backgroundColor: "#FF6900",
    alignItems: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  flextite: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  titleGunkan: {
    fontFamily: "Dodo",
    fontSize: 25,
    width: 300,
  },
  descriptionView: {
    paddingTop: 8,

    fontFamily: "Dodo",
  },
  descriptionL: {
    color: "rgba(0,0,0,0.6)",
    fontFamily: "Dodo",
    fontSize: 14,
  },
  discriptionLolkek: {
    paddingTop: 10,
    fontFamily: "Dodo",
    fontSize: 16,
    color: "#333",
  },
});
