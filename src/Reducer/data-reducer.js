export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    /* Setting page route */
    case "ROUTE":
      return { ...state, route: payload };
    /* Product Catelogue */
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    /* Cart functionality */
    case "ADD_TO_CART":
      if (state.itemsInCart.some((cartItem) => cartItem.id === payload.id)) {
        //toast message - item added to cart again
        return {
          ...state,
          itemsInWishlist: state.itemsInWishlist.filter(
            (wishItem) => wishItem.id !== payload.id
          ),
          itemsInCart: state.itemsInCart.map((cartItem) =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        //toast message - added to cart
        return {
          ...state,
          itemsInWishlist: state.itemsInWishlist.filter(
            (wishItem) => wishItem.id !== payload.id
          ),
          itemsInCart: state.itemsInCart.concat({
            ...payload,
            quantity: 1,
          }),
        };
      }
    case "REMOVE_FROM_CART":
      //toast - item removed from cart
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    case "CLEAR_CART":
      return { ...state, itemsInCart: [] };

    /* Wishlist functionality */
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
        itemsInWishlist: state.itemsInWishlist.concat({
          ...payload,
        }),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item.id !== payload.id
        ),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.concat(payload),
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };
      case "SORT": return {...state, sortBy: payload};
      case "TOGGLE_STOCK": return {...state, inStock: !state.inStock};
      case "TOGGLE_DELIVERY": return {...state, fastDelivery: !state.fastDelivery};
      case "PRICE_RANGE": return {...state, priceRange: payload};
    default:
      return state;
  }
};



//---------------------------------------------------------------
/*
const [itemsInCart, setItemsInCart] = useState(
  JSON.parse(localStorage.getItem('cartItems')) || []);
const [toastMsg, setToastMsg] = useState("");

useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(itemsInCart));
},[itemsInCart]);
  */
