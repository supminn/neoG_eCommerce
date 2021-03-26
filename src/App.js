import { useState } from "react";
import "./App.css";
import { Cart, ProductListing, CartHeader } from "./Components";

function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h1>Supminn's eCommerce application</h1>
      <button type="button" onClick={() => setRoute("cart")}>
        Cart
      </button>
      <button type="button" onClick={() => setRoute("products")}>
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