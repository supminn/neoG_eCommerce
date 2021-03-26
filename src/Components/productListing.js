import { useEffect, useState } from "react";
import { useCart } from "../Context/cart-context";
import { products, Product } from "./products";

export const ProductListing = () => {
  const [showToast, setShowToast] = useState(false);
  const {toastMsg, addToCart} = useCart();

  useEffect(()=>{
    setTimeout(()=> setShowToast(false),2000);
  },[toastMsg]);

  return (
    <>
      <h2>Product Catalogue</h2>
      {products.map((item) => (
        <div key={item.id}>
          <Product data={item} />
          <button type="button" onClick={() => {setShowToast(true); addToCart(item)}}>
            Add to Cart
          </button>
        </div>
      ))}
      <p className="toast-msg">{showToast && toastMsg}</p>
    </>
  );
};

/*
 setItemsInCart(cartItems => 
       cartItems.map(cartItem => cartItem.name===item.name?{...cartItem,quantity:cartItem.quantity+1}:item)
    )
*/
