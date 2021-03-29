import { useEffect } from "react";
import "./App.css";
import { Cart, ProductListing, Wishlist} from "./Components";
import { useDataContext } from "./Context/data-context";
import { serverRequest } from "./API/serverRequest";

function App() {
  const {state:{itemsInCart:items, route},dispatch} = useDataContext();

  useEffect(() => {
    (async () => {
      const {response:{products}, error} = await serverRequest("api/products","GET");
      if(!error){
        dispatch({type:"SET_PRODUCTS", payload:products })
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Supminn's eCommerce application</h1>
      <button
        type="button"
        className={
          route === "products" ? "btn btn-primary" : "btn btn-secondary"
        }
        onClick={() => dispatch({type:"ROUTE",payload:"products"})}
      >
        <i className="fas fa-store"></i> Products
      </button>
      <button
        type="button"
        className={route === "cart" ? "btn btn-primary" : "btn btn-secondary"}
        onClick={() => dispatch({type:"ROUTE",payload:"cart"})}
      >
        <i className="fas fa-shopping-cart"></i> Cart ({items.reduce((acc,curr) => acc+ curr.quantity,0)})
      </button>
      <button
        type="button"
        className={
          route === "wishlist" ? "btn btn-primary" : "btn btn-secondary"
        }
        onClick={() => dispatch({type:"ROUTE",payload:"wishlist"})}
      >
        <i className="fas fa-heart"></i> Wishlist
      </button>
      {route === "cart" && <Cart />}
      {route === "products" && <ProductListing />}
      {route === "wishlist" && <Wishlist />}

    </div>
  );
}

export default App;

/*
{ showToast && <Toast message={"something to show"} timer={3000} />
{ showToast, showLoader, hideLoader } = useLoaderAndToast()

addToCart() {
  showLoader();
  // on success;
   hideLoader();
   showToast("success message");
}
*/
