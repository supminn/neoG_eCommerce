import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import {
  Home,
  Cart,
  ProductListing,
  Wishlist,
  Toast,
  Navigation,
} from "./Components";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./api/serverRequest";


function App() {
  const {
    state: { toastMsg },
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
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <div className="route-container">{toastMsg && <Toast />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<ProductListing />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
