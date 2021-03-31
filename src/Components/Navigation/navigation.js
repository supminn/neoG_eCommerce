import { useState } from "react";
import { useDataContext } from "../../Context/data-context";

export const Navigation = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const {
    state: { itemsInCart: items, itemsInWishlist: wishes, route },
    dispatch,
  } = useDataContext();

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
      setSearchTxt("");
    }
  };
  return (
    <nav className="nav">
      <h1 className="nav-header">Supminn's eCommerce application</h1>
      {route === "products" && (
        <div className="txt-box">
          <input
            className="txt-input"
            type="text"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
            onKeyDown={searchHandler}
            placeholder="Search Products"
          />
          <span
            className="txt-icon"
            onClick={() => {
              dispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
              setSearchTxt("");
            }}
          >
            <i className="fas fa-search fa-lg"></i>
          </span>
        </div>
      )}
      <section className="sec-nav-btns">
        <button
          type="button"
          className={
            route === "products" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
        >
          <i className="fas fa-store"></i> Store
        </button>
        <button
          type="button"
          className={route === "cart" ? "btn btn-primary" : "btn btn-secondary"}
          onClick={() => dispatch({ type: "ROUTE", payload: "cart" })}
        >
          <i className="fas fa-shopping-cart"></i> Cart (
          {items.reduce((acc, curr) => acc + curr.quantity, 0)})
        </button>
        <button
          type="button"
          className={
            route === "wishlist" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => dispatch({ type: "ROUTE", payload: "wishlist" })}
        >
          <i className="fas fa-heart"></i> Wishlist ({wishes.length})
        </button>
      </section>
    </nav>
  );
};
