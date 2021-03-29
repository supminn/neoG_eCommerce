import {  useDataContext } from "../../Context/data-context";
import { Product } from "./products";

export const ProductListing = () => {
  const {state} = useDataContext();
  
  // const sortedProducts, filteredProducts
  return (
    <>
      <h2 className="txt-header-2">Product <span className="txt-secondary">Catalogue</span></h2>
      {/* <FilterProducts /> */}
      {state.products.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))}
    </>
  );
};


// const [showToast, setShowToast] = useState(false);

  // const {toastMsg, addToCart} = useCart();

  // useEffect(()=>{
  //   setTimeout(()=> setShowToast(false),2000);
  // },[toastMsg]);

  /* <p className="toast-msg">{showToast && toastMsg}</p> */
