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
    <h2 className="txt-header-2">My <span className="txt-secondary">Wishlist</span></h2>
    {totalItems>0 && <span>({totalItems} items)</span>}
    <section className="grid-container">
    {itemsInWishlist.map(
        (item) =>( <WishlistItem key={item.id} item={item} />
      ))}
    </section>
    {totalItems === 0 && (
        <>
          <h3>You don't have any wishes.</h3>
          {/* btn - add items from wishlist */}
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
