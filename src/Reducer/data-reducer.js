export const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (
        state.itemsInCart.some((cartItem) => cartItem.id === action.payload.id)
      ) {
        //toast message - item added to cart again
        return {
          ...state,
          itemsInCart: state.itemsInCart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        //toast message - added to cart
        return {
          ...state,
          itemsInCart: state.itemsInCart.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }

    case "REMOVE_FROM_CART":
      //toast - item removed from cart
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    case "CLEAR_CART":
      return { ...state, itemsInCart: [] };
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
