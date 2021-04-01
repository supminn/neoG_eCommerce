import { useEffect } from "react";
import "./App.css";
import { Cart, ProductListing, Wishlist, Toast, Navigation } from "./Components";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./api/serverRequest";

function App() {
  const {
    state: {toastMsg, route},
    dispatch,
  } = useDataContext();

  useEffect(() => {
    (async () => {
      const {
        response: { products },
        error,
      } = await serverRequest("api/products", "GET");
      if (!error) {
        dispatch({ type: "SET_PRODUCTS", payload: products });
      }
    })();
  }, []);

  return (
    <div className="App">
      {toastMsg && <Toast />}
      <Navigation/>
      {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />}
      {route === "wishlist" && <Wishlist />}
    </div>
  );
}

export default App;

