export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    /* Setting page route */
    case "ROUTE":
      return { ...state, route: payload };
    /* Product Catalogue */
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    /* Cart functionality */
    case "ADD_TO_CART":
      if (state.itemsInCart.some((cartItem) => cartItem.id === payload.id)) {
        return {
          ...state,
          toastMsg: `Cart updated successfully!`,
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
        return {
          ...state,
          toastMsg: `"${payload.name}" added to cart`,
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
      return {
        ...state,
        toastMsg: `Cart updated successfully!`,
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
        toastMsg: `"${payload.name}" added to wishlist`,
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
        toastMsg: `"${payload.name}" removed from wishlist`,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item.id !== payload.id
        ),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        toastMsg: `"${payload.name}" moved to wishlist`,
        itemsInWishlist: state.itemsInWishlist.concat(payload),
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem.id !== payload.id
        ),
      };

    /* Product listing filters */
    case "SORT":
      return { ...state, sortBy: payload };
    case "TOGGLE_STOCK":
      return { ...state, inStock: !state.inStock };
    case "TOGGLE_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "PRICE_RANGE":
      return { ...state, priceRange: payload };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortBy: null,
        inStock: false,
        fastDelivery: false,
        priceRange: 1000,
        searchValue:""
      };
      case "SEARCH_PRODUCT":  return {...state, searchValue: payload.toLowerCase()};
      
    /* Toast message */
    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };
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
