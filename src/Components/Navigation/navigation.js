import { useDataContext } from "../../Context/data-context";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const {
    state: { itemsInCart: items, itemsInWishlist: wishes }
  } = useDataContext();

  const totalCartItems = items.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <nav className="nav flex-container">
      <NavLink to="/" className="no-line nav-logo-container">
        <img className="img-rd img-logo" src={logo} alt="logo" />
        <span className="nav-header"> SupMart</span>
      </NavLink>
      <section className="sec-nav-btns">
        <NavLink to="/products" className="no-line fas fa-lg fa-store secondary-txt" activeClassName="no-line fas fa-lg fa-store primaryBg-txt">
        <span className="badge-icon hidden-vis">0</span>
        </NavLink>
        <NavLink to="/wishlist" activeClassName="no-line fas fa-lg fa-heart primaryBg-txt" className="no-line fas fa-lg fa-heart secondary-txt">
        <span className={wishes.length>0?"badge-icon primaryBg-txt":"hidden-vis"}>{wishes.length}</span>
        </NavLink>
        <NavLink to="/cart" className="no-line fas fa-lg fa-shopping-cart secondary-txt" activeClassName="no-line fas fa-lg fa-shopping-cart primaryBg-txt"><span className={totalCartItems>0?"badge-icon primaryBg-txt":"hidden-vis"}>
        {totalCartItems}
      </span></NavLink>        
      </section>
    </nav>
  );
};
