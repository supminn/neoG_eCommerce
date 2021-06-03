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
  