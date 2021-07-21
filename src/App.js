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
  Transaction,
} from "./Components";
import { useAuthContext } from "./Context";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  initializeUserWishlist,
  initializeUserCart,
  initializeUserAddresses,
  updateCart,
  fetchAllProducts,
} from "./services";

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

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      await fetchAllProducts(dispatch, setLoader);
    })();
  }, [dispatch]);

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
          (async () => {
            while (product.quantity-- > 0) {
              await updateCart(product, "ADD", dispatch, setShowLoader);
            }
          })();
        });
      }
      (async () => {
        await initializeUserCart(dispatch);
        await initializeUserWishlist(dispatch);
        await initializeUserAddresses(dispatch);
      })();
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
          <Route
            path="/products"
            element={<ProductListing loader={loader} />}
          />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <PrivateRoute path="/wishlist" element={<Wishlist />} />
          <PrivateRoute path="/address" element={<Address />} />
          <PrivateRoute path="/user-profile" element={<UserProfile />} />
          <PrivateRoute path="/order-summary" element={<OrderSummary />} />
          <PrivateRoute path="/payment-transaction" element={<Transaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
