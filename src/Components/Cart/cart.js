import { useDataContext } from "../../Context/data-context";
import { CartItem } from "./cartItem";
import addToCart from '../../images/add-to-cart.svg';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { PriceDetails } from "./priceDetail";
import axios from "axios";
import { useAuthContext } from "../../Context";

export const Cart = () => {
  const {
    state: { itemsInCart },
    dispatch,
  } = useDataContext();
  const {login, userData} = useAuthContext();
  const [showLoader, setShowLoader] = useState(false);

  const cartTotal = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = itemsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
  
  useEffect(() => {
    document.title = "SupMart | Cart"
  },[]);

  const clearCart = async () => {
    if(login){
      setShowLoader(true);
      const { status } = await axios.delete(
        `https://api-supminn.herokuapp.com/cart/${userData._id}`);
    }
    dispatch({ type: "CLEAR_CART" });
    setShowLoader(false);
  }
  return (
    <>
      <h2 className="txt-header-2">
        My <span className="secondary-txt">Cart</span> 
      </h2>
      {totalItems > 0 && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={clearCart}
          >
            Remove All {showLoader && <i className="fa fa-spinner fa-pulse" />}
          </button>
      )}
      
      <div className={totalItems>0?"cart-container":"empty-cart"}>
        <section className="cart-items">
          {itemsInCart.map(
            (item) =>
              item.quantity > 0 && <CartItem key={item._id} item={item} />
          )}
        </section>
        {totalItems === 0 && (
          <>
        <img className="img-res img-svg" src={addToCart} alt="cart"/>
            <h3>There are no items added to Cart</h3>
            <NavLink to="/products">
            <button
              className="btn btn-primary"
             >
              View Products
            </button>
            </NavLink>
          </>
        )}

        {totalItems > 0 && <PriceDetails totalItems={totalItems} cartTotal={cartTotal}/>}
      </div>
    </>
  );
};