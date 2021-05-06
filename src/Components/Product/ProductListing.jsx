import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDataContext } from "../../Context";
import shopProduct from "../../images/window-shop.svg";
import {
  FilterProducts,
  getSortedProducts,
  getFilteredProducts,
} from "./FilterProducts";
import { Product } from "./Products";

export const ProductListing = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const {
    state: {
      products,
      sortBy,
      inStock,
      fastDelivery,
      priceRange,
      searchValue,
      brandFilter,
      categoryFilter,
    },
    dispatch,
  } = useDataContext();

  const sortedProducts = getSortedProducts(products, sortBy);
  const filteredProducts = getFilteredProducts(
    sortedProducts,
    inStock,
    fastDelivery,
    priceRange,
    searchValue,
    brandFilter,
    categoryFilter
  );

  useEffect(() => {
    (async () => {
      try {
        setShowLoader(true);
        const {
          data: { products },
        } = await axios.get("https://api-supminn.herokuapp.com/products");
        dispatch({ type: "SET_PRODUCTS", payload: products });
        setShowLoader(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    document.title = "SupMart | Products";
  }, []);

  const updateFilterDisplay = () => {
    if (window.innerWidth >= 768) {
      setShowFilters(true);
    }
  }

  useEffect(() => {
    updateFilterDisplay();
    window.addEventListener("resize", updateFilterDisplay);
    return () => window.removeEventListener("resize", updateFilterDisplay);
    }, []);
    

  return showLoader ? (
    <div className="loader-container">
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  ) : (
    <>
      <h2 className="txt-header-2">
        Product <span className="secondary-txt">Catalogue</span>
      </h2>
      <section className="product-listing-container">
        <p className="btn-filter" onClick={() => setShowFilters(!showFilters)}>
          <i className="fas fa-filter">{showFilters ? "Apply" : "Filters"}</i>
        </p>
        {showFilters && (
          <div className="filter-component-container">
            <FilterProducts />
          </div>
        )}
        <section
          className={
            filteredProducts.length > 0
              ? "grid-container product-list"
              : "product-list"
          }
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item._id}>
                <Product product={item} />
              </div>
            ))
          ) : (
            <>
              <img
                className="img-res img-svg"
                src={shopProduct}
                alt="products"
              />
              <h2 className="txt-header-2">No Products to display</h2>
            </>
          )}
        </section>
      </section>
    </>
  );
};
