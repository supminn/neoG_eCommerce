export const dataReducer = (state, {type, payload}) => {
  switch (type) {
   /* Setting page route */
    case "ROUTE": return {...state, route:payload};
   /* Product Catelogue */
    case "SET_PRODUCTS": return {...state, products: payload}; 
    /* Cart functionality */
    case "ADD_TO_CART":
      if (
        state.itemsInCart.some((cartItem) => cartItem.id === payload.id)
      ) {
        //toast message - item added to cart again
        return {
          ...state,
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
          itemsInWishlist: state.itemsInWishlist.concat({
            ...payload,
          }),
        };
        case "REMOVE_FROM_WISHLIST":
          return {
            ...state,
            itemsInWishlist: state.itemsInWishlist.filter(item => item.id !== payload.id),
          };

    default:
      return state;
  }
};

//Refactor to inc_qty, dec-qty, add/remove etc...
//---------------------------------------------------------------
/*
const [itemsInCart, setItemsInCart] = useState(
  JSON.parse(localStorage.getItem('cartItems')) || []);
const [toastMsg, setToastMsg] = useState("");

useEffect(()=>{
  localStorage.setItem('cartItems',JSON.stringify(itemsInCart));
},[itemsInCart]);

const removeFromCart = (item) => {
  for (let cItem of itemsInCart) {
    if (cItem.id === item.id) {
      if(cItem.quantity === 1){
        setItemsInCart((cItems) =>
        cItems.filter((cVal) => cVal.id !== item.id)
      );
      break;
      }
      else{
        setItemsInCart(cartItems => cartItems.map((cItemVal) =>
        cItemVal.id === item.id
          ? { ...cItemVal, quantity: cItemVal.quantity - 1 }
          : cItemVal
      ))
      break;
      } 
    }
  }
};

const addToCart = (item) =>
  setItemsInCart((cartItems) => {
    if (cartItems.some((cItem) => cItem.id === item.id)) {
      setToastMsg(`${item.name} added to cart again.`);
      return cartItems.map((cItem) =>
        cItem.id === item.id
          ? { ...cItem, quantity: cItem.quantity + 1 }
          : cItem
      );
    } else {
      setToastMsg(`${item.name} added to cart.`);
      return cartItems.concat({ ...item, quantity: 1 });
    }
  });

  const clearCart = () => {
    setItemsInCart([]);
  }
  */
