import { useDataContext } from "../../Context/data-context";
import { AddToCart } from "../Cart/addToCart";

export const WishlistItem = ({ item }) => {
  const { name, image, price } = item;
  const { dispatch } = useDataContext();
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      <AddToCart product={item} />
      <i
        className="fa fa-times wish-remove"
        onClick={() =>
          dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
        }
      ></i>
    </div>
  );
};
