// import { useEffect, useState } from "react";
import {  useDataContext } from "../../Context/data-context";
import { Product } from "./products";

export const ProductListing = () => {
  // const [showToast, setShowToast] = useState(false);
  const {state} = useDataContext();

  // const {toastMsg, addToCart} = useCart();

  // useEffect(()=>{
  //   setTimeout(()=> setShowToast(false),2000);
  // },[toastMsg]);

  return (
    <>
      <h2 className="txt-header-2">Product <span className="txt-secondary">Catalogue</span></h2>
      {state.products.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))}
      {/* <p className="toast-msg">{showToast && toastMsg}</p> */}
    </>
  );
};

