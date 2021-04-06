import { useDataContext } from "../../Context/data-context";

export const PriceDetails = ({ totalItems, cartTotal }) => {
  const { dispatch } = useDataContext();
  return (
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
  );
};
