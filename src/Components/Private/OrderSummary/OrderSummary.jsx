import { useLocation } from "react-router";
import { useDataContext } from "../../../Context";

export const OrderSummary = () => {
  const {
    state: {
      address: { name, streetLocality, city, state, country, pinCode },
    },
  } = useLocation();
  const {
    state: { itemsInCart },
    dispatch,
  } = useDataContext();
  const totalPrice = Number(
    itemsInCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) - 100
  ).toFixed(2);
  return (
    <>
      <h2 className="txt-header-2">
        Order <span className="secondary-txt">Summary</span>
      </h2>
      <em className="txt-address">
        <span className="secondary-txt">Deliver to: </span>
        {name}, {streetLocality}, {city}, {state}, {country} - {pinCode}
      </em>
      <p className="primaryBg-txt">
        <b>₹{totalPrice}</b> ({itemsInCart.length} items)
      </p>
      <ul className="list-spaced">
        {itemsInCart.map((item) => (
          <li className="list-item" key={item._id}>
            {item.name} -{" "}
            <span className="txt-small secondary-txt">
              ₹{Number(item.price).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-solid"
        onClick={() => {
          dispatch({
            type: "SHOW_TOAST",
            payload: "Functionality comming soon!",
          });
        }}
      >
        Proceed to Payment
      </button>
    </>
  );
};
