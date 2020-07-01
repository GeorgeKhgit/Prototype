import { AsyncStorage } from "react-native";
const actionStart = () => async (dispatch) => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const result = await res.json();
  dispatch({ type: "GET_COUNTRY", payload: result });
};

const addItemToCart = (itemCart) => async (dispatch) => {
  // await AsyncStorage.removeItem('cart')
  // console.log(await AsyncStorage.getItem('cart'))
  let myArray = [];
  const cart = await AsyncStorage.getItem("cart");
  if (cart != null) {
    myArray = JSON.parse(cart);
    let isInsideTheCart = false;
    myArray.forEach((item) => {
      if (item.id == itemCart.id) {
        isInsideTheCart = true;
        item.countItem = item.countItem + 1;
      }
    });
    if (!isInsideTheCart) {
      myArray.push(itemCart);
    }
  } else {
    myArray.push(itemCart);
  }
  let totalAmountOne = 0;
  myArray.forEach(item=>{
    totalAmountOne += item.countItem * item.price
  })

  await AsyncStorage.setItem("cart", JSON.stringify(myArray));
  dispatch({type:'SET_CART_ADD',payload:myArray})
  dispatch({type:'SET_TOTAL_AMOUNT',payload:totalAmountOne})
};
const removeItemToCart = (itemCart) => async (dispatch) => {
  // await AsyncStorage.removeItem('cart')
  // console.log(await AsyncStorage.getItem('cart'))
  let myArray = [];
  const cart = await AsyncStorage.getItem("cart");
  if (cart != null) {
    myArray = JSON.parse(cart);
    let isInsideTheCart = false;
    myArray.forEach((item,index, object) => {
      if (item.id == itemCart.id) {
        isInsideTheCart = true;
        if(item.countItem !=1)
        {
          item.countItem = item.countItem - 1;
        }
        else{
          object.splice(index, 1);
        }
      }
    });
    if (!isInsideTheCart) {
      myArray.push(itemCart);
    }
    
  } else {
    myArray.push(itemCart);
  }
  let totalAmountOne = 0;
  myArray.forEach(item=>{
    totalAmountOne += item.countItem * item.price
  })

  await AsyncStorage.setItem("cart", JSON.stringify(myArray));
  dispatch({type:'SET_CART_ADD',payload:myArray})
  dispatch({type:'SET_TOTAL_AMOUNT',payload:totalAmountOne})
};



const updateCart = ()=> async (dispatch)=>{
  let myArray = [];
  const cart = await AsyncStorage.getItem("cart");
  if(cart != null){
    myArray = JSON.parse(cart);
    let totalAmountOne = 0;
    myArray.forEach(item=>{
      totalAmountOne += item.countItem * item.price
    })
    dispatch({type:'SET_CART_ADD',payload:myArray})
    dispatch({type:'SET_TOTAL_AMOUNT',payload:totalAmountOne})
  }
}
export { actionStart, addItemToCart, updateCart,removeItemToCart };
