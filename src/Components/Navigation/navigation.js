import { useDataContext } from "../../Context/data-context";
import logo from "../../images/logo.png";
export const Navigation = () => {
  const {
    state: { itemsInCart: items, itemsInWishlist: wishes, route },
    dispatch,
  } = useDataContext();

  return (
    <nav className="nav flex-container">
      <div className="nav-logo-container" onClick={() => dispatch({type:"ROUTE",payload:"home"})}>
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header"> SupMart</span>
      </div>
      <section className="sec-nav-btns">
        <i
          className={
            route === "products"
              ? "fas fa-lg fa-store primaryBg-txt"
              : "fas fa-lg fa-store secondary-txt"
          }
          onClick={() => dispatch({ type: "ROUTE", payload: "products" })}
        ><span className="badge-icon hidden-vis">0</span></i>

        <i
          className={
            route === "wishlist"
              ? "fas fa-lg fa-heart primaryBg-txt"
              : "fas fa-lg fa-heart secondary-txt"
          }
          onClick={() => dispatch({ type: "ROUTE", payload: "wishlist" })}
        ><span className="badge-icon primaryBg-txt">{wishes.length}</span></i>
        
        <i
          className={
            route === "cart"
              ? "fas fa-lg fa-shopping-cart primaryBg-txt"
              : "fas fa-lg fa-shopping-cart secondary-txt"
          }
          onClick={() => dispatch({ type: "ROUTE", payload: "cart" })}
        ><span className="badge-icon primaryBg-txt">
        {items.reduce((acc, curr) => acc + curr.quantity, 0)}
      </span></i>
        
      </section>
    </nav>
  );
};
