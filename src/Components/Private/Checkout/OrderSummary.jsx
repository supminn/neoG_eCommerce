import axios from "axios";
import { useLocation } from "react-router";
import { useAuthContext, useDataContext } from "../../../Context";
import { loadStripe } from "@stripe/stripe-js";
import { API_URL } from "../../../services";
import Loader from "react-loader-spinner";

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
      const response = await axios.post(`${API_URL}/cart/checkout`, { url });
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
      <p className="txt-desc txt-small">
        Stripe payment integration have been implmented. <br />
        Kindly use any of the test card details on{" "}
        <a
          className="btn-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://stripe.com/docs/testing#cards"
        >
          Stripe
        </a>{" "}
        to proceed with the transaction.
      </p>
      {showLoader && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};
