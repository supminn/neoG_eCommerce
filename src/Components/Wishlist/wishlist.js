import { useDataContext } from "../../Context/data-context";
import { WishlistItem } from "./wishlistItem";

export const Wishlist = () => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useDataContext();
  const totalItems = itemsInWishlist.length;
  return (
    <>
    <h2 className="txt-header-2">My <span className="secondary-txt">Wishlist</span></h2>
    {totalItems>0 && <span className="total-wishes">({totalItems} items)</span>}
    <section className={totalItems>1?"grid-container":"wishes-container"}>
    {itemsInWishlist.map(
        (item) =>( <WishlistItem key={item.id} item={item} />
      ))}
    </section>
    {totalItems === 0 && (
        <>
          <h3>You don't have any wishes.</h3>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
          >
            Add some wishes!
          </button>
        </>
      )}
    </>
  );
};