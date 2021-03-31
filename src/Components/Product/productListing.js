import {  useDataContext } from "../../Context/data-context";
import { FilterProducts, getSortedProducts, getFilteredProducts } from "./filterProducts";
import { Product } from "./products";

export const ProductListing = () => {
  const {state:{products, sortBy,inStock, fastDelivery, priceRange, searchValue}} = useDataContext();
  
  const sortedProducts = getSortedProducts(products,sortBy)
  const filteredProducts = getFilteredProducts(sortedProducts,inStock, fastDelivery, priceRange, searchValue);

  return (
    <>
      <h2 className="txt-header-2">Product <span className="txt-secondary">Catalogue</span></h2>
     <section className="product-listing-container">
     <div className="filter-container">
     <FilterProducts />
     </div>
      <section className="grid-container">
      {filteredProducts.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))}
      </section>
     </section>
    </>
  );
};


// const [showToast, setShowToast] = useState(false);

  // const {toastMsg, addToCart} = useCart();

  // useEffect(()=>{
  //   setTimeout(()=> setShowToast(false),2000);
  // },[toastMsg]);

  /* <p className="toast-msg">{showToast && toastMsg}</p> */
