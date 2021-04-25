import { useNavigate } from "react-router";
import { useAuthContext, useDataContext } from "../../Context";
import { updateCart } from "../../Utils/serverRequests";

export const CartItem = ({ item }) => {
  const { name, image, price, quantity, brand, rating, offer } = item;
  const { dispatch } = useDataContext();
  const { login, userData, showLoader, setShowLoader } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="card-horizontal">
      <img className="card-img" alt={name} src={image} />
      <section className="card-details-container">
        <h3 className="card-heading">{brand}</h3>
        <div className="cart-item-desc-content">
          <p className="card-heading">{name}</p>
          <span className="card-desc">₹{(price * quantity).toFixed(2)} </span>
          <span className="card-discount txt-small"> ({offer})</span>
          <div className="rating">
            <span className="txt-primaryBg">Rating: </span>
            <span className="rating-block txt-small">
              {rating}
              <i
                className="fa fa-star fa-sm 
                  rating-checked"
              >
                {" "}
              </i>
            </span>
          </div>
        </div>
        <div className="cart-item-desc-btns">
          <span className="font-sm">
            <button
              type="button"
              disabled={showLoader}
              className="btn btn-light btn-sm"
              onClick={() =>
                login
                  ? updateCart(
                      item,
                      "REMOVE",
                      userData._id,
                      dispatch,
                      setShowLoader
                    )
                  : dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              {item.quantity > 1 ? "-" : <i className="fas fa-trash"></i>}
            </button>

            <em>{quantity}</em>
            <button
              type="button"
              disabled={showLoader}
              className="btn btn-light btn-sm"
              onClick={() =>
                login
                  ? updateCart(
                      item,
                      "ADD",
                      userData._id,
                      dispatch,
                      setShowLoader
                    )
                  : dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    })
              }
            >
              +
            </button>
          </span>
          <button
            type="button"
            disabled={showLoader}
            onClick={() => {
              if (!login) navigate("/login");
              updateCart(item, "MOVE", userData._id, dispatch, setShowLoader);
            }}
            className="btn btn-secondary"
          >
            Move to Wishlist
          </button>
        </div>
      </section>
    </div>
  );
};

//remove and move to wishlist
