import { useEffect, useState } from "react";
import "./App.css";
import { Cart, ProductListing, CartHeader } from "./Components";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./API/serverRequest";

function App() {
  const {dispatch} = useDataContext();

  useEffect(() => {
    (async () => {
      const {response:{products}, error} = await serverRequest("api/products","GET");
      if(!error){
        dispatch({type:"SET_PRODUCTS", payload:products })
      }
    })();
  }, []);

  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h1>Supminn's eCommerce application</h1>
      <button
        type="button"
        className={
          route === "products" ? "btn btn-primary" : "btn btn-secondary"
        }
        onClick={() => setRoute("products")}
      >
        Products
      </button>
      <button
        type="button"
        className={route === "cart" ? "btn btn-primary" : "btn btn-secondary"}
        onClick={() => setRoute("cart")}
      >
        Cart
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
