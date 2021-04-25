import { useAuthContext, useDataContext } from "../../../Context";
import { updateWishlist } from "../../../Utils/serverRequests";
import { AddToCart } from "../..";

export const WishlistItem = ({ item }) => {
  const {
    name,
    image,
    price,
    inStock,
    brand,
    rating,
    offer,
    fastDelivery,
  } = item;
  const { dispatch } = useDataContext();
  const {userData, setShowLoader } = useAuthContext();

  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <div className="txt-container">
        <h3 className="card-heading">{brand}</h3>
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
        {!inStock && (
          <div className="stock-container-overlay">
            <h3 className="txt-header-3 stock-txt-overlay">
              Out of Stock <i className="far fa-clock"></i>
            </h3>
          </div>
        )}
        {fastDelivery && (
          <span className="badge badge-primary card-badge">Express</span>
        )}
      </div>
      <AddToCart product={item} />
      <i
        className="fa fa-times wish-remove"
        onClick={() =>
          updateWishlist(item, true, userData._id, dispatch, setShowLoader)
        }
      ></i>
    </div>
  );
};
