import { useDataContext } from "../../Context/data-context";
import { CartItem } from "./cartItem";
import addToCart from '../../images/add-to-cart.svg';

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
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
            >
              View Products
            </button>
          </>
        )}

        {totalItems > 0 && (
          <section className="price-details">
            <h3 className="txt-header-3">
              Price Details{" "}
              <span className="secondary-txt">({totalItems} items)</span>
            </h3>
            <div className="price-breakup">
              <span className="flex-container">
                <p className="txt-desc">Total MRP</p>
                <em>₹{cartTotal.toFixed(2)}</em>
              </span>
              <span className="flex-container">
                <p className="txt-desc">Discount on MRP</p>
                <em className="discount">₹{(100).toFixed(2)}</em>
              </span>
              <span className="flex-container">
                <p className="txt-desc">Convenience Fee</p>
                <span>
                  <span className="strike-through">₹99</span>
                  <em className="discount"> FREE</em>
                </span>
              </span>
              <hr />
              <span className="flex-container">
                <b className="txt-desc">Total Amount</b>
                <b>₹{(cartTotal - 100).toFixed(2)}</b>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                dispatch({
                  type: "SHOW_TOAST",
                  payload: "functionality coming soon...",
                })
              }
            >
              Place Order
            </button>
          </section>
        )}
      </div>
    </>
  );
};

/* Add right panel for total items and price details, with discount */
