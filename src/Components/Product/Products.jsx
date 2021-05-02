import { Link } from "react-router-dom";
import { AddToCart } from "..";
import { AddToWishlist } from "..";

export const Product = ({ product }) => {
  const {
    _id,
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
      <Link
        to={`/products/${_id}`}
        state={{ product }}
        className="no-line link-container"
      >
        <img className="card-img" alt={name} src={image} />
        <div className="txt-container">
          <h3 className="card-heading">{brand}</h3>
          <p className="card-heading">{name}</p>
          <b className="card-desc">₹{price} </b>
          <span className="card-discount txt-small"> ({offer})</span>
          <div className="rating">
            <span className="txt-primaryBg">Rating: </span>
            <span
              className="rating-block 
          txt-small"
            >
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
      </Link>
      <AddToCart product={product} />
      <AddToWishlist product={product} />
    </div>
  );
};
