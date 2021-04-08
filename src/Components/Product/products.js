import { AddToCart } from "../Cart/addToCart";
import { AddToWishlist } from "../Wishlist/addToWishlist";

export const Product = ({ product }) => {
  const {
    name,
    image,
    price,
    inStock,
    brand,
    offer,
    rating,
    fastDelivery,
  } = product;
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
      <AddToCart product={product} />
      <AddToWishlist product={product} />
    </div>
  );
};
