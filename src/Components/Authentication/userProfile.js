import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";

export const UserProfile = () => {
  const { logOutUser, userName } = useAuthContext();
  const { dispatch } = useDataContext();

  const logOutHandler = () => {
    dispatch({ type: "CLEAR_CART" });
    logOutUser();
  };
  return (
    <>
      <h2 className="txt-header-2">
        User <span className="secondary-txt">Profile</span>
      </h2>
      <div className="div-container">
        <i class="fas fa-5x fa-user-circle primaryBg-txt"></i>
        <h3 className="txt-header-3">
          Welcome <span>{userName.toUpperCase()}</span>
        </h3>
        <div className="user-nav-container">
          <Link
            to="/products"
            className="no-line fas fa-lg fa-store secondary-txt"
          >
            <span className="txt-small primaryBg-txt"> Products Catelogue</span>
          </Link>

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
        </div>
        <button className="btn btn-primary" onClick={logOutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};
