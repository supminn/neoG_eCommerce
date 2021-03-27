import { useEffect, useState } from "react";
import {  useDataContext } from "../Context/data-context";
import { Product } from "./products";

export const ProductListing = () => {
  // const [showToast, setShowToast] = useState(false);
  const {state, dispatch} = useDataContext();

  // const {toastMsg, addToCart} = useCart();

  // useEffect(()=>{
  //   setTimeout(()=> setShowToast(false),2000);
  // },[toastMsg]);

  return (
    <>
      <h2>Product Catalogue</h2>
      {state.products.map((item) => (
        <div key={item.id}>
          <Product data={item} />
          <button type="button" class="btn btn-fill" onClick={() => {/*setShowToast(true);*/ dispatch({type:"ADD_TO_CART",payload:item})}}>
            Add to Cart
          </button>
        </div>
      ))}
      {/* <p className="toast-msg">{showToast && toastMsg}</p> */}
    </>
  );
};

