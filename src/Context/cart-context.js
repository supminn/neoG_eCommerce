import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
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
  return (
    <CartContext.Provider value={{ itemsInCart, addToCart, removeFromCart, toastMsg, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};