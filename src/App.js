import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDataContext } from "./Context";
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
  UserProfile,
  OrderSummary,
  ProductDetails,
  PrivateRoute,
  Footer,
} from "./Components";
import { useAuthContext } from "./Context";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { initializeUserCart, updateCart } from "./services/cart";
import { initializeUserWishlist } from "./services/wishlist";
import { initializeUserAddresses } from "./services/address";

function App() {
  const {
    state: { toastMsg, itemsInCart },
    dispatch,
  } = useDataContext();
  const { login, setShowLoader } = useAuthContext();

  const cartItems = useMemo(() => {
    if (!login && itemsInCart.length > 0) {
      return itemsInCart.map((item) => item);
    }
  }, [itemsInCart]);


  useEffect(() => {
    if (login) {
      axios.defaults.headers.common["Authorization"] = login.token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [login]);

  useEffect(() => {
    if (login) {
      if (cartItems) {
        cartItems.forEach((product) => {
          while (product.quantity-- > 0) {
            updateCart(product, "ADD", dispatch, setShowLoader);
          }
        });
      }
      initializeUserCart(dispatch);
      initializeUserWishlist(dispatch);
      initializeUserAddresses(dispatch);
    }
  }, [login]);

  return (
    <div className="App">
      <Navigation />
      <div className="toastmsg-container">{toastMsg && <Toast />}</div>
      <section className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
          <PrivateRoute path="/address" element={<Address />} />
          <PrivateRoute path="/user-profile" element={<UserProfile />} />
          <PrivateRoute path="/order-summary" element={<OrderSummary />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
