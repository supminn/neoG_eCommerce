import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../../Context";
import { emptyCart } from "../../../services";
import successLogo from "../../../images/payment-success.svg";
import failureLogo from "../../../images/payment-failure.svg";
import axios from "axios";
export const Transaction = () => {
  const query = new URLSearchParams(useLocation().search);
  const status = query.get("status");
  const { dispatch } = useDataContext();
  const { login, setShowLoader } = useAuthContext();

  useEffect(() => {
    if (login && status === "success") {
      (async () => {
        axios.defaults.headers.common["Authorization"] = login.token;
        await emptyCart(dispatch, setShowLoader);
      })();
    }
  }, [login, status]);

  return (
    <div>
      {status === "success" && (
        <section className="payment-status-container">
          <img
            src={successLogo}
            alt="payment-success"
            className="img-res img-svg"
          />
          <div className="txt-container">
            <h3 className="txt-header-3">
              Order <span className="secondary-txt">Confirmed!</span>
            </h3>
            <p className="txt-desc">
              Thank you for your order with <b>SupMart</b>. Please check your
              registered email for more information on this order.
            </p>
            <NavLink to="/products">
              <button className="btn btn-primary">Shop more!</button>
            </NavLink>
          </div>
        </section>
      )}
      {status === "failure" && (
        <section className="payment-status-container">
          <img
            src={failureLogo}
            alt="payment-failure"
            className="img-res img-svg"
          />
          <div className="txt-container">
            <h3 className="txt-header-3">
              Oh no, your transaction{" "}
              <span className="secondary-txt">failed </span>😕
            </h3>
            <p className="txt-desc">
              Your order couldn't be confirmed. There was an issue with the
              payment transaction. Please try again.
            </p>
            <NavLink to="/cart">
              <button className="btn btn-primary">View Cart</button>
            </NavLink>
          </div>
        </section>
      )}
    </div>
  );
};
