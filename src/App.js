import { useEffect, useState } from "react";
import "./App.css";
import { Cart, ProductListing, CartHeader } from "./Components";
import axios from 'axios';

function App() {
  useEffect(() => {
    (async () => {
      const response = await axios.get('api/products');
      console.log({response});
    })()
  },[]);

  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h1>Supminn's eCommerce application</h1>
      <button type="button" className={route==="cart"?"btn btn-primary":"btn btn-secondary"} onClick={() => setRoute("cart")}>
        Cart
      </button>
      <button type="button"  className={route==="products"?"btn btn-primary":"btn btn-secondary"}  onClick={() => setRoute("products")}>
        Products
      </button>
      <CartHeader />
      {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />}
    </div>
  );
}

export default App;

/*
{ showToast && <Toast message={"something to show"} timer={3000} />
{ showToast, showLoader, hideLoader } = useLoaderAndToast()

addToCart() {
  showLoader();
  // on success;
   hideLoader();
   showToast("success message");
}
*/