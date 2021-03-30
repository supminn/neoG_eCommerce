import { useDataContext } from "../../Context/data-context";
import { AddToCart } from "../Cart/addToCart";

export const WishlistItem = ({ item }) => {
  const { name, image, price, inStock } = item;
  const { dispatch } = useDataContext();
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      {!inStock && (<div className="stock-container-overlay">
      <h3 className="txt-header-3 stock-txt-overlay">Out of Stock <i className="far fa-clock"></i></h3>
      </div>)}
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
