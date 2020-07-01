import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { addItemToCart,removeItemToCart } from "../../../actions";
export const CartMain = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const totalAmounM = useSelector(state=>state.totalAmount)
  const incrimentData = (itemCa) => {
    dispatch(addItemToCart(itemCa));
  };
  const dicrimentData = (itemCa) => {
    dispatch(removeItemToCart(itemCa));
  };
  return (
    <>
      <ScrollView style={styles.cartViewFone}>
        {
          carts.length ? (
            <View>
            {carts.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                {item.images && item.images[0] ? (
                  <Image
                    style={{
                      width: 160,
                      height: 130,
                    }}
                    source={{ uri: item.images[0].imageUrl }}
                  />
                ) : (
                  <View style={styles.emptyCartItem}></View>
                )}
                <View style={{ height: 'auto', paddingLeft: 10,  flex: 1,
    flexGrow: 1, }}>
                  <Text style={styles.joikin}>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: 120,
                      marginTop: 15,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        dicrimentData(item);
                      }}
                      style={styles.plussText}
                    >
                      <View>
                        <Text style={styles.plusIndex}>-</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.counterFix}>{item.countItem}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        incrimentData(item);
                      }}
                      style={styles.plussText}
                    >
                      <View>
                        <Text style={styles.plusIndex}>+</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
          ) :
          (
            <View style={styles.emptyCartE}>
              <Text style={styles.emptyCartText}>Cart is empty</Text>
            </View>
          )
        }
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 60,
          backgroundColor: "#fff",
          width: "100%",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <View style={styles.checkoutOrder}>
            <Text style={styles.textRealtext}>Оформить за {totalAmounM} тг</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  emptyCartText:{
    fontSize:23,
    color:'#333',
    fontFamily:'Dodo'
  },
  emptyCartE:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },  
  textRealtext: {
    color: "#fff",
    fontFamily: "Dodo",
    fontSize: 17,
  },
  checkoutOrder: {
    width: "90%",
    backgroundColor: "#FF6900",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    paddingVertical: 12,
  },
  counterFix: {
    fontSize: 16,
  },
  plusIndex: {
    color: "#fff",
    fontFamily: "Dodo",
    fontSize: 20,
  },
  plussText: {
    backgroundColor: "#FF6900",
    width: 40,
    paddingVertical: Platform.OS == "ios" ? 8 : 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  cartViewFone: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 60,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10
  },
  emptyCartItem: {
    width: 160,
    height: 130,
    backgroundColor: "#333",
  },
  joikin: {
    fontFamily: "Dodo",
    fontSize: 16,
  },
});
