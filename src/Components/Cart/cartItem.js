import { useDataContext } from "../../Context/data-context";

export const CartItem = ({ item }) => {
  const { name, image, price, quantity, brand, rating, offer } = item;
  const { dispatch } = useDataContext();
  return (
    <div className="cart-card">
      <img className="card-img" alt={name} src={image} />
      <section className="card-details-container">
        <h3 className="card-heading">{brand}</h3>
        <div className="cart-item-desc-content">
          <p className="card-heading">{name}</p>
          <span className="card-desc">₹{price} </span>
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
              className="btn btn-light btn-sm"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              {item.quantity > 1 ? "-" : <i className="fas fa-trash"></i>}
            </button>

            <em>{quantity}</em>
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
            >
              +
            </button>
          </span>
          <button
            type="button"
            onClick={() =>
              dispatch({ type: "MOVE_TO_WISHLIST", payload: item })
            }
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
