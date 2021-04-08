import { useDataContext } from "../../Context/data-context";
import { CartItem } from "./cartItem";
import addToCart from '../../images/add-to-cart.svg';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PriceDetails } from "./priceDetail";

export const Cart = () => {
  const {
    state: { itemsInCart },
    dispatch,
  } = useDataContext();
  const cartTotal = itemsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItems = itemsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
  
  useEffect(() => {
    document.title = "SupMart | Cart"
  },[]);

  return (
    <>
      <h2 className="txt-header-2">
        My <span className="secondary-txt">Cart</span> 
      </h2>
      {totalItems > 0 && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Remove All
          </button>
      )}
      
      <div className={totalItems>0?"cart-container":"empty-cart"}>
        <section className="cart-items">
          {itemsInCart.map(
            (item) =>
              item.quantity > 0 && <CartItem key={item.id} item={item} />
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