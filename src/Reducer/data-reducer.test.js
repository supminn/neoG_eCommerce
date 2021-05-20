import { dataReducer } from "./data-reducer";

describe("testing SET_CART in data reducer", () => {
  test("should set items in  cart", () => {
    const action = {
      type: "SET_CART",
      payload: [
        {
          _id: 123,
          quantity: 1,
        },
        {
          _id: 124,
          quantity: 2,
        },
        {
          _id: 125,
          quantity: 3,
        },
      ],
    };

    const initalState = {
      products: [],
      itemsInCart: [],
      itemsInWishlist: [],
      addresses: [],
      toastMsg: "",
      searchValue: "",
      sortBy: null,
      inStock: false,
      fastDelivery: false,
      priceRange: 30000,
      brandFilter: [],
      categoryFilter: [],
    };

    const state = dataReducer(initalState, action);
    expect(state).toEqual({
      products: [],
      itemsInCart: [
        {
          _id: 123,
          quantity: 1,
        },
        {
          _id: 124,
          quantity: 2,
        },
        {
          _id: 125,
          quantity: 3,
        },
      ],
      itemsInWishlist: [],
      addresses: [],
      toastMsg: "",
      searchValue: "",
      sortBy: null,
      inStock: false,
      fastDelivery: false,
      priceRange: 30000,
      brandFilter: [],
      categoryFilter: [],
    });
  });
});

describe("testing ADD_TO_CART in data reducer", () => {
  test("should add new item or update item quantity in cart", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: {
        _id: 123,
        name: "Jump Rope",
        inStock: true,
        fastDelivery: false,
      },
    };

    const cartData = {
      itemsInWishlist: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
        },
      ],
      itemsInCart: [
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
          quantity: 1,
        },
      ],
      toastMsg: "",
    };

    let state = dataReducer(cartData, action);
    expect(state).toEqual({
      itemsInWishlist: [],
      itemsInCart: [
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
          quantity: 1,
        },
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
      toastMsg: '"Jump Rope" added to cart',
    });

    state = dataReducer(state, action);
    expect(state).toEqual({
      itemsInWishlist: [],
      itemsInCart: [
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
          quantity: 1,
        },
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 2,
        },
      ],
      toastMsg: "Cart updated successfully!",
    });
  });
});

describe("testing REMOVE_FROM_CART in data reducer", () => {
  test("should decrement the quantity or remove an item from cart", () => {
    const action = {
      type: "REMOVE_FROM_CART",
      payload: {
        _id: 123,
        name: "Jump Rope",
        inStock: true,
        fastDelivery: false,
      },
    };

    let state = {
      itemsInCart: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 2,
        },
        {
          _id: 124,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
      toastMsg: "",
    };

    state = dataReducer(state, action);
    expect(state).toEqual({
      itemsInCart: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
        {
          _id: 124,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
      toastMsg: "Cart updated successfully!",
    });

    state = dataReducer(state, action);
    expect(state).toEqual({
      itemsInCart: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 0,
        },
        {
          _id: 124,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
      toastMsg: "Cart updated successfully!",
    });

  });
});

describe("testing CLEAR_CART in data reducer", () => {
    test("should clear or remove all items in the cart", () => {
        const action = {
            type:"CLEAR_CART"
        }

        let state = {
            itemsInCart:[{
                _id: 123,
                name: "Jump Rope",
                inStock: true,
                fastDelivery: false,
                quantity: 2,
              },
              {
                _id: 124,
                name: "Jump Rope",
                inStock: true,
                fastDelivery: false,
                quantity: 1,
              }],
        };

        state = dataReducer(state, action);
        expect(state).toEqual({
            itemsInCart:[]
        })
    })
    
})
