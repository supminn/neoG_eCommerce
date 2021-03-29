import { AddToCart } from "../Cart/addToCart";

export const WishlistItem = ({item}) => {
  const {name, image, price} = item;
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      <AddToCart product={item}/>
    </div>
  );
};
