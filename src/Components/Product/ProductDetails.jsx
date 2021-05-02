import { useLocation } from "react-router";
import { AddToCart } from "../Cart/AddToCart";
import { AddToWishlist } from "../Private/Wishlist/AddToWishlist";

export const ProductDetails = () => {
  const {
    state: { product },
  } = useLocation();
  const {
    name,
    image,
    price,
    brand,
    category,
    fastDelivery,
    inStock,
    offer,
    rating,
  } = product;
  const fullRating = [1, 2, 3, 4, 5];

  return (
    <>
      <h2 className="txt-header-2">Product <span className="secondary-txt">Details</span></h2>
      <br/>
      <div className="card-horizontal div-center">
        <img className="card-img" src={image} alt="product" />
        <section className="card-details-container">
          <h3 className="card-heading">{name}</h3>
          {fullRating.includes(rating) ? (
            <div className="rating">
              {fullRating.map((rate) =>
                rate <= rating ? (
                  <i className="fa fa-star fa-lg rating-checked"></i>
                ) : (
                  <i className="fa fa-star fa-lg"></i>
                )
              )}
            </div>
          ) : (
            <div className="rating">
              {fullRating.map((rate) =>
                rate <= Math.floor(rating) ? (
                  <i className="fa fa-star fa-lg rating-checked"></i>
                ) : rate === Math.floor(rating) + 1 ? (
                  <i className="fa fa-star-half-alt fa-lg rating-checked"></i>
                ) : (
                  <i className="fa fa-star fa-lg"></i>
                )
              )}
            </div>
          )}
          <div className="cart-item-desc-content">
            <p className="card-heading">Brand: {brand}</p>
            <p className="txt-small">{category}</p>
            <b className="card-desc">₹{price.toFixed(2)} </b>
          </div>
          {inStock ? (
            <AddToCart product={product} />
          ) : (
            <button className="btn" disabled>
              Add to Cart
            </button>
          )}
          <AddToWishlist product={product} />
          <div className="icon-container">
          <i className="fas fa-certificate secondary-txt">
            <span className="primaryBg-txt txt-small">
              {" "}{offer}
            </span>
          </i>
          <i className="fas fa-shipping-fast secondary-txt">
            <span className="primaryBg-txt txt-small">
              {fastDelivery
                ? " 2 days Fast Delivery"
                : " 5 days Standard Delivery"}
            </span>
          </i>
          {inStock ? (
            <i className="fas fa-store-alt secondary-txt">
              <span className="primaryBg-txt txt-small"> Item in Stock</span>
            </i>
          ) : (
            <i className="fas fa-store-alt-slash secondary-txt">
              <span className="primaryBg-txt txt-small">
                {" "}
                Item not in Stock
              </span>
            </i>
          )}
          </div>
        </section>
      </div>
    </>
  );
};
