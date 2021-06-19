import { getFilteredProducts, getSortedProducts } from "./filterProducts";

describe("testing the array operations to filter the list of products", () => {
  test("should sort the list of products by price from high to low", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 685,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ];

    const sortBy = "HIGH_TO_LOW";

    //Act
    const sortedProducts = getSortedProducts(products, sortBy);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 685,
      },
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
    ]);
  });

  test("should sort the list of products by price from low to high", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ];

    const sortBy = "LOW_TO_HIGH";

    //Act
    const sortedProducts = getSortedProducts(products, sortBy);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
      },

      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ]);
  });

  test("should return the initial list of products since 'sortBy' is not provided", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ];

    //Act
    const sortedProducts = getSortedProducts(products);

    //Assert
    expect(sortedProducts).toEqual([
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ]);
  });

  test("should return list of products that are in stock", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        inStock: true,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        inStock: true,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        inStock: false,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        inStock: false,
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      true,
      false,
      30000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        inStock: true,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        inStock: true,
      },
    ]);
  });

  test("should return list of products that are in eligible for fast delivery", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        fastDelivery: true,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        fastDelivery: true,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        fastDelivery: false,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        fastDelivery: false,
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      true,
      30000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        fastDelivery: true,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        fastDelivery: true,
      },
    ]);
  });

  test("should return list of crossrope branded products", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        brand: "Amazon Basic",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        brand: "Crossrope",
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        brand: "Crossrope",
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        brand: "Rush Athletics",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      30000,
      "",
      ["Crossrope"],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 450,
        brand: "Crossrope",
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        brand: "Crossrope",
      },
    ]);
  });

  test("should return list of products belonging to one category", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        category: "Jump Rope",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 4500,
        category: "Jump Rope",
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        category: "Accessories",
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        category: "Accessories",
      },
      {
        _id: "ef127",
        name: "Get lean set",
        price: 12900,
        category: "Jump Rope",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      30000,
      "",
      [],
      ["Accessories"]
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        category: "Accessories",
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        category: "Accessories",
      },
    ]);
  });

  test("should return list of products having a price less than the given range", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 4500,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 3850,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
      {
        _id: "ef127",
        name: "Get lean set",
        price: 12900,
        category: "Jump Rope",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      4000,
      "",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 3850,
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
      },
    ]);
  });

  test("should return list of products whose name matches with the search string", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        inStock: true,
        fastDelivery: false,
        brand: "Amazon Basic",
        category: "Jump Rope",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 4500,
        inStock: true,
        fastDelivery: true,
        brand: "Crossrope",
        category: "Jump Rope",
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        inStock: false,
        fastDelivery: false,
        brand: "Crossrope",
        category: "Accessories",
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        inStock: false,
        fastDelivery: true,
        brand: "Rush Athletics",
        category: "Accessories",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      false,
      false,
      30000,
      "t-shirt",
      [],
      []
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        inStock: false,
        fastDelivery: false,
        brand: "Crossrope",
        category: "Accessories",
      },
    ]);
  });

  test("should return list of products that applies all the filters", () => {
    //Arrange
    const products = [
      {
        _id: "ef123",
        name: "Jump Rope",
        price: 550,
        inStock: true,
        fastDelivery: false,
        brand: "Amazon Basic",
        category: "Jump Rope",
      },
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 4500,
        inStock: true,
        fastDelivery: true,
        brand: "Crossrope",
        category: "Jump Rope",
      },
      {
        _id: "ef125",
        name: "Workout T-shirt",
        price: 385,
        inStock: false,
        fastDelivery: false,
        brand: "Crossrope",
        category: "Accessories",
      },
      {
        _id: "ef126",
        name: "Jump rope shoes",
        price: 1299,
        inStock: false,
        fastDelivery: true,
        brand: "Rush Athletics",
        category: "Accessories",
      },
      {
        _id: "ef127",
        name: "Get lean set",
        price: 12900,
        inStock: true,
        fastDelivery: true,
        brand: "Crossrope",
        category: "Jump Rope",
      },
    ];

    //Act
    const filteredProducts = getFilteredProducts(
      products,
      true,
      true,
      5000,
      "",
      ["Crossrope"],
      ["Jump Rope"]
    );

    //Assert
    expect(filteredProducts).toEqual([
      {
        _id: "ef124",
        name: "Weighted Jump Rope",
        price: 4500,
        inStock: true,
        fastDelivery: true,
        brand: "Crossrope",
        category: "Jump Rope",
      },
    ]);
  });
});
