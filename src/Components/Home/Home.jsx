import homeImg from "../../images/home_page.png";
import { useDataContext } from "../../Context";
import amazonBasic from "../../images/amazon_basic.png";
import rushAthletics from "../../images/rush_athletics.jpg";
import crossrope from "../../images/crossrope.jpg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { dispatch } = useDataContext();

  useEffect(() => {
    document.title = "SupMart | Home";
  }, []);

  return (
    <>
      <h2 className="txt-header-1">
        Welcome to the newGen eCommerce experience with{" "}
        <span className="secondary-txt">SupMart</span>!
      </h2>

      <img className="img-res img-svg img-main" src={homeImg} alt="Home page" />

      <div className="home-txt-desc">
        <p className="txt-desc primaryBg-txt">
          Avoid the struggle of offline shopping and experience the new
          generation aprroach with <b>SupMart</b>. Best brands with attractive
          pricing! One stop shop for all your <em>jump rope workout</em> needs!
        </p>
        <NavLink to="/products">
          <button
            type="button"
            className="btn btn-solid"
          >
            Shop Now
          </button>
        </NavLink>
      </div>

      <h2 className="txt-header-2">
        Featured <span className="secondary-txt">Brands</span>
      </h2>

      <div className="cartegory-container">
        <NavLink to="/products">
          <img
            className="img-res img-svg"
            src={amazonBasic}
            alt="Amazon Basic"
            onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"AmazonBasics"})}
          />
        </NavLink>
        <NavLink to="/products">
        <img
          className="img-res img-svg"
          src={rushAthletics}
          alt="Rush Athletics"
          onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"Rush Athletics"})}
        />
        </NavLink>
        <NavLink to="/products">
        <img
          className="img-res img-svg"
          src={crossrope}
          alt="Crossrope"
          onClick={() => dispatch({type: "TOGGLE_BRAND", payload:"Crossrope"})}
        />
        </NavLink>
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
