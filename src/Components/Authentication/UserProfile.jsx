import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";

export const UserProfile = () => {
  const { logOutUser, login } = useAuthContext();
  const { dispatch } = useDataContext();

  const logOutHandler = () => {
    dispatch({ type: "SET_WISHLIST", payload: [] });
    dispatch({ type: "CLEAR_CART" });
    logOutUser();
  };

  return (
    <>
      <h2 className="txt-header-2">
        User <span className="secondary-txt">Profile</span>
      </h2>
      <div className="div-container">
        <i className="fas fa-5x fa-user-circle primaryBg-txt"></i>
        <h3 className="txt-header-3">
          Welcome <span>{login.user}</span>
        </h3>
        <div className="user-nav-container">
          <Link
            to="/wishlist"
            className="no-line fas fa-lg fa-heart secondary-txt"
          >
            <span className="txt-small primaryBg-txt"> My Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="no-line fas fa-lg fa-shopping-cart secondary-txt"
          >
            <span className="txt-small primaryBg-txt"> My Cart</span>
          </Link>
          <Link
            to="/address"
            className="no-line fas fa-lg fa-address-book secondary-txt"
          >
            <span className="txt-small primaryBg-txt"> Address Management</span>
          </Link>
        </div>
        <button className="btn btn-primary" onClick={logOutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};
