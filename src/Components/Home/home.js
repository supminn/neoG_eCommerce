import webShop from "../../images/web-shop.svg";
import { useDataContext } from "../../Context/data-context";
import onlineShop from "../../images/online-shopping.svg";
import purchaseSucces from "../../images/purchase-success.svg";
import shoppingApp from "../../images/shopping-app.svg";
import { useEffect } from "react";

export const Home = () => {
  const { dispatch } = useDataContext();

  useEffect(() => {
    document.title = "SupMart | Home"
  },[]);

  return (
    <>
      <h2 className="txt-header-1">
        Welcome to the newGen eCommerce experience with{" "}
        <span className="secondary-txt">SupMart</span>!
      </h2>

      <img className="img-res img-svg img-main" src={webShop} alt="webShop" />

      <div className="home-txt-desc">
        <p className="txt-desc primaryBg-txt">
          Avoid the struggle of offline shopping and experience the new
          generation aprroach with <b>SupMart</b>. Best brands with attractive
          pricing!
        </p>

        <button
          type="button"
          className="btn btn-solid"
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
        >
          Shop Now
        </button>
      </div>

      <h2 className="txt-header-2">
        Featured <span className="secondary-txt">Categories</span>
      </h2>

      <div className="cartegory-container">
        <img
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          className="img-res img-svg"
          src={onlineShop}
          alt="onlineShop"
        />

        <img
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          className="img-res img-svg"
          src={purchaseSucces}
          alt="purchase"
        />

        <img
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          className="img-res img-svg"
          src={shoppingApp}
          alt="app"
        />
      </div>

      <footer className="footer">
        <h3 className="primary-txt">
          Made with <i className="fas fa-heart"></i> by{" "}
          <span className="secondary-txt">Supminn</span>
        </h3>
        <div>
          <a className="link primary-txt" href="https://github.com/supminn">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a className="link primary-txt" href="https://twitter.com/supminn">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            className="link primary-txt"
            href="https://www.linkedin.com/in/supminn"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
