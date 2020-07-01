let initialState = {
  data: [],
  cartCount:0,
  cart:[],
  totalAmount:0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRY":
      return {
        ...state,
        data: action.payload
      };
    // case "SET_CART_COUNT":
    //   return{
    //     ...state,
    //     cartCount: state.cartCount + 1
    //   }
    case "SET_CART_ADD":
      return{
        ...state,
        cart:action.payload,
        cartCount: action.payload.length,
      }
    case "SET_TOTAL_AMOUNT":
      return{
        ...state,
        totalAmount:action.payload
      }
    default:
      return state;
  }
};

export default reducer;
