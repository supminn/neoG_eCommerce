import { Routes, Route } from 'react-router-dom';
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
  PrivateRoute
} from "./Components";
import { useAuthContext } from './Context';
import {useEffect, useMemo} from 'react';
import axios from 'axios';
import { updateCart } from './Utils/serverRequests';


function App() {
  const {
    state: { toastMsg, itemsInCart }, dispatch
  } = useDataContext();
  const {login, userData, setShowLoader} = useAuthContext();

  const cartItems = useMemo(() => {
    if(!login && itemsInCart.length>0){
      return itemsInCart.map(item => item);
    }
  },[itemsInCart]);

  useEffect(() => {
    if(login && userData._id){
      if(cartItems){
        cartItems.forEach(product => {
          while(product.quantity-- > 0){
            updateCart(
              product,
              "ADD",
              userData._id,
              dispatch,
              setShowLoader
            );
          }
        })
      }
      (async () => {
        const {data:{cart}} = await axios.get(`https://api-supminn.herokuapp.com/cart/${userData._id}`);
          dispatch({type:"SET_CART", payload: cart});
      })();
    }
  },[login, userData])

  useEffect(() => {
    if(login && userData._id){
      (async () => {
        const {data:{wishlistItems}} = await axios.get(`https://api-supminn.herokuapp.com/wishlist/${userData._id}`);
        dispatch({type:"SET_WISHLIST", payload: wishlistItems});
        const {data:{address}} =  await axios.get(`https://api-supminn.herokuapp.com/address/${userData._id}`);
        dispatch({type:"SET_ADDRESS", payload: address});
      })();
    }
    else{
      dispatch({type:"SET_WISHLIST", payload: []});
    }
  },[login, userData, dispatch])


  return (
    <div className="App">
      <Navigation />
      <div className="toastmsg-container">{toastMsg && <Toast />}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <PrivateRoute path="/wishlist" element={<Wishlist/>}/>
        <PrivateRoute path="/address" element={<Address/>}/>
        <PrivateRoute path="/user-profile" element={<UserProfile/>}/>
        <PrivateRoute path="/order-summary" element={<OrderSummary/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
