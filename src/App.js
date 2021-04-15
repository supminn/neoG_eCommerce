import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./api/serverRequest";
import { PrivateRoute } from "./api/privateRoute";
import {
  Home,
  Cart,
  ProductListing,
  Wishlist,
  Toast,
  Navigation,
  Login,
  Address,
  Signup,
} from "./Components";



function App() {
  const {
    state: { toastMsg },
    dispatch,
  } = useDataContext();

  useEffect(() => {
    (async () => {
      const {
        response: products ,
        error,
      } = await serverRequest("https://supminn-api.herokuapp.com/products", "GET");
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
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/products" element={<ProductListing />} />
        <PrivateRoute path="/wishlist" element={<Wishlist/>}/>
        <PrivateRoute path="/checkout" element={<Address/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
