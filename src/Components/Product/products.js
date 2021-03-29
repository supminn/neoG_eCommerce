import { AddToCart } from "../Cart/addToCart";
import { AddToWishlist } from "../Wishlist/addToWishlist";

export const Product = ({product}) => {
  const {name, image, price} = product;
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      <AddToCart product={product}/>
      <AddToWishlist product={product}/>
    </div>
  );
};