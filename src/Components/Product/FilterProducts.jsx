import { useState } from "react";
import { useDataContext } from "../../Context";
import { distinct } from "../../Utils/arrayOperations";

export const FilterProducts = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const {
    state: { products, sortBy, inStock, fastDelivery, priceRange, brandFilter, categoryFilter },
    dispatch,
  } = useDataContext();

  const brands = products.map(product => product.brand).filter(distinct);
  const categories = products.map(product => product.category).filter(distinct);

  const searchHandler = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "SEARCH_PRODUCT", payload: searchTxt });
      setSearchTxt("");
    }
  };

  return (
    <div className="filter-component">
      <div className="flex-container filter-header">
        <h3 className="txt-header-3">Filters</h3>
        <button
          type="button"
          className="btn-clear"
          onClick={() => dispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          Clear All
        </button>
      </div>
     
      <div className="txt-box">
      {" "}<input
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

      <div className="sort-container">
        <h4>Sort by Price:</h4>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
            checked={sortBy === "LOW_TO_HIGH"}
          />
          {" "}Low to High
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
            checked={sortBy === "HIGH_TO_LOW"}
          />
          {" "}High to Low
        </label>
      </div>

      <div className="filter-container">
        <h4>Filters:</h4>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
            checked={inStock}
          />
          {" "}Exclude out of stock{" "}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
            checked={fastDelivery}
          />
          {" "}Fast Delivery only{" "}
        </label>
        <label>
          <b>Price Range:</b> 0 to {priceRange}
          <input
            className="txt-range"
            type="range"
            min="0"
            max="30000"
            value={priceRange}
            step="100"
            onChange={(event) =>
              dispatch({ type: "PRICE_RANGE", payload: event.target.value })
            }
          />
        </label>
        <h4>Brands</h4>
            {brands.map(brand => (
              <label>
              <input
                type="checkbox"
                onChange={() => dispatch({ type: "TOGGLE_BRAND" , payload: brand})}
                checked={brandFilter.some(value => value === brand)}
              />
              {" "}{brand}{" "}
            </label>
            ))}
            <h4>Categories</h4>
            {categories.map(category => (
              <label>
              <input
                type="checkbox"
                onChange={() => dispatch({ type: "TOGGLE_CATEGORY" , payload: category})}
                checked={categoryFilter.some(value => value === category)}
              />
              {" "}{category}{" "}
            </label>
            ))}
      </div>
    </div>
  );
};

/* Sort the products according to price */
export const getSortedProducts = (originalData, sortBy) => {
  const productList = [...originalData];
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return productList.sort((a, b) => b.price - a.price);
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return productList.sort((a, b) => a.price - b.price);
  }
  return productList;
};

/* Filter product list based on conditions */
export const getFilteredProducts = (
  productData,
  isInStock,
  isFastDelivery,
  maxRange,
  searchValue,
  brandFilter,
  categoryFilter
) => {
    productData = productData.filter((product) => (isInStock ? product.inStock : true))
    .filter((product) => (isFastDelivery ? product.fastDelivery : true))
    .filter((product) => Number(product.price) <= maxRange)
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchValue) ||
        product.brand.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );
    if(brandFilter.length>0){
      productData = productData.filter(product => brandFilter.includes(product.brand));
    }
    if(categoryFilter.length>0){
      productData = productData.filter(product => categoryFilter.includes(product.category));
    }
    return productData;
};
