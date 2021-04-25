import { useDataContext } from "../../../Context";
import { WishlistItem } from "./WishlistItem";
import wishlist from "../../../images/wishlist.svg";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
  } = useDataContext();
  const totalItems = itemsInWishlist.length;

  useEffect(() => {
    document.title = "SupMart | Wishlist"
  },[]);

  return (
    <>
    <h2 className="txt-header-2">My <span className="secondary-txt">Wishlist</span></h2>
    {totalItems>0 && <span className="total-wishes">({totalItems} items)</span>}
    <section className={totalItems>1?"grid-container":"wishes-container"}>
    {itemsInWishlist.map(
        (item) =>( <WishlistItem key={item._id} item={item} />
      ))}
    </section>
    {totalItems === 0 && (
        <>
        <img className="img-res img-svg" src={wishlist} alt="wishlist"/>
          <h3>You don't have any wishes.</h3>
          <NavLink to="/products">
          <button
            className="btn btn-primary"
          >
            Add some wishes!
          </button>
          </NavLink>
        </>
      )}
    </>
  );
};