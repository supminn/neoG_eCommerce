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


function App() {
  const {
    state: { toastMsg },
  } = useDataContext();

 

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
