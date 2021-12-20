import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext, useDataContext } from "../../Context";
import { removeFromCart, updateCart } from "../../services";

export const CartItem = ({ item }) => {
  const { _id, name, image, price, quantity, brand, rating, offer } = item;
  const { dispatch } = useDataContext();
  const { login, showLoader, setShowLoader } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="card-horizontal">
      <img
        className="card-img cursor-pointer"
        alt={name}
        src={image}
        onClick={() =>
          navigate(`/products/${_id}`, { state: { product: item } })
        }
      />
      <section className="card-details-container primaryBg-txt">
        <Link
          className="no-line primaryBg-txt"
          to={`/products/${_id}`}
          state={{ product: item }}
        >
          <h3 className="card-heading">{brand}</h3>
        </Link>
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
                  ? updateCart(item, "REMOVE", dispatch, setShowLoader)
                  : dispatch({ type: "DECREMENT_FROM_CART", payload: item })
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
                  ? updateCart(item, "ADD", dispatch, setShowLoader)
                  : dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    })
              }
            >
              +
            </button>
          </span>
          <div>
            <button
              type="button"
              disabled={showLoader}
              onClick={() => {
                if (!login) navigate("/login");
                updateCart(item, "MOVE", dispatch, setShowLoader);
              }}
              className="btn btn-secondary"
            >
              Move to Wishlist
            </button>
            <button
              type="button"
              disabled={showLoader}
              className="btn btn-light"
              onClick={() =>
                login
                  ? removeFromCart(item, dispatch, setShowLoader)
                  : dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
