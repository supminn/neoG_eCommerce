import { useDataContext } from "../../Context/data-context"

export const FilterProducts = () => {
    const {state:{sortBy, inStock, fastDelivery, priceRange}, dispatch} = useDataContext();
    return(
        <div className="filter-component">
        <h3>Filters</h3>
        <button type="button" className="btn btn-light" onClick={() => dispatch({type:"CLEAR_ALL_FILTERS"})}>Clear All</button>
        <fieldset>
        <legend>Sort by Price</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
            checked={sortBy === "LOW_TO_HIGH"}
          />
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
            checked={sortBy === "HIGH_TO_LOW"}
          />
          High to Low
        </label>
      </fieldset>
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
            checked={inStock}
          />
          Exclude out of stock{" "}
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
            checked={fastDelivery}
          />
          Fast Delivery only{" "}
        </label>
        <br />
        <label>
          Price Range:{" "}
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange}
            step="100"
            onChange={(event) => 
              dispatch({ type: "PRICE_RANGE", payload: event.target.value })
            }
          />
        </label>
      </fieldset>
        </div>
    )
}

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
    maxRange, searchValue
  ) => {
    return productData
      .filter((product) => (isInStock ? product.inStock : true))
      .filter((product) => (isFastDelivery ? product.fastDelivery : true))
      .filter((product) => product.price <= maxRange)
      .filter(product => product.name.toLowerCase().includes(searchValue)||product.brand.toLowerCase().includes(searchValue));
  };
  
