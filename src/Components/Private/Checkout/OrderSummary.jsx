import axios from "axios";
import { useLocation } from "react-router";
import { useAuthContext, useDataContext } from "../../../Context";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL } from "../../../services";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export const OrderSummary = () => {
  const {
    state: {
      address: { name, street, locality, city, state, country, pinCode },
    },
  } = useLocation();
  const {
    state: { itemsInCart },
  } = useDataContext();
  const { showLoader, setShowLoader } = useAuthContext();
  const totalPrice = Number(
    itemsInCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) - 100
  ).toFixed(2);

  const checkoutToPayment = async () => {
    try {
      setShowLoader(true);
      let url = window.location.href;
      url = url.slice(0, url.length - 13);
      const response = await axios.put(`${API_URL}/cart`, { url });
      if (response.data.success) {
        let stripe = await stripePromise;
        await stripe.redirectToCheckout({
          sessionId: response.data.id,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      <h2 className="txt-header-2">
        Order <span className="secondary-txt">Summary</span>
      </h2>
      <em className="txt-address">
        <span className="secondary-txt">Deliver to: </span>
        {name}, {street}, {locality}, {city}, {state}, {country} - {pinCode}
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
      <button className="btn btn-solid" onClick={checkoutToPayment}>
        Proceed to Payment
      </button>
      {showLoader && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
      <NavLink to="/payment-transaction?status=success">
        <button className="btn btn-primary">success</button>
      </NavLink>
      <NavLink to="/payment-transaction?status=failure">
        <button className="btn btn-primary">failure</button>
      </NavLink>
    </>
  );
};
