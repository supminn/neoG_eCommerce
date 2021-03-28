import { useDataContext } from "../../Context/data-context";
import { CartItem } from "./cartItem";

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
    <h2 className="txt-header-2">My <span className="txt-secondary">Cart</span></h2>
      {totalItems > 0 && (
        <>
          <h3>
            Total Price for {totalItems} items: ₹{cartTotal.toFixed(2)}
          </h3>
          {/* Checkout button - redirect to address management */}
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Remove All
          </button>
        </>
      )}
      {itemsInCart.map(
        (item) => item.quantity > 0 && <CartItem key={item.id} item={item} />
      )}
      {totalItems === 0 && (
        <>
          <h3>There are no items added to Cart</h3>
          {/* btn - add items from wishlist */}
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          >
            View Products
          </button>
        </>
      )}
    </>
  );
};
