import { Routes, Route } from 'react-router-dom';
import "./App.css";
import { useDataContext } from "./Context/data-context";
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
  UserProfile
} from "./Components";
import { useAuthContext } from './Context';
import { useEffect } from 'react';
import axios from 'axios';


function App() {
  const {
    state: { toastMsg }, dispatch
  } = useDataContext();
  const {login, userData} = useAuthContext();
 
  useEffect(() => {
    if(login){
      (async () => {
        const {data:{wishlistItems}} = await axios.get(`http://localhost:5000/wishlist/${userData._id}`);
        dispatch({type:"SET_WISHLIST", payload: wishlistItems});
      })();
    }
  },[login])

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
        <PrivateRoute path="/user-profile" element={<UserProfile/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
