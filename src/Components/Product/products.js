import { AddToCart } from "../Cart/addToCart";
import { AddToWishlist } from "../Wishlist/addToWishlist";

export const Product = ({product}) => {
  const {name, image, price, inStock,fastDelivery } = product;
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      {!inStock && (<div className="stock-container-overlay">
      <h3 className="txt-header-3 stock-txt-overlay">Out of Stock <i className="far fa-clock"></i></h3>
      </div>)}
      <p className="txt-small">{fastDelivery?"Fast Delivery":"Standard Delivery"}</p>
      <AddToCart product={product}/>
      <AddToWishlist product={product}/>
    </div>
  );
};
