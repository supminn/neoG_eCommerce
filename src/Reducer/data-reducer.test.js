import { dataReducer } from "./data-reducer";

describe("testing cart modification operations on data reducer", () => {
  test("should load products already in cart once use logs in", () => {
    const action = {
      type: "SET_CART",
      payload: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
          quantity: 2,
        },
        {
          _id: 125,
          name: "Rush Athletics Mat",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
    };
    const initialState = {
      itemsInCart: [],
    };

    const state = dataReducer(initialState, action);

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
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
          quantity: 2,
        },
        {
          _id: 125,
          name: "Rush Athletics Mat",
          inStock: true,
          fastDelivery: false,
          quantity: 1,
        },
      ],
    });
  });
});

test("should remove the product from wishlist if it exists and add the product to cart; should update the quantity of an existing product in cart", () => {
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

test("should remove all items in the cart", () => {
  const action = {
    type: "CLEAR_CART",
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
  };

  state = dataReducer(state, action);
  expect(state).toEqual({
    itemsInCart: [],
  });
});

describe("testing wishlist operations on data reducer", () => {
  test("should load products into wishlist when user logs in", () => {
    const action = {
      type: "SET_WISHLIST",
      payload: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
        },
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
        },
        {
          _id: 125,
          name: "Crossrope get lean set",
          inStock: false,
          fastDelivery: false,
        },
      ],
    };

    const initialState = {
      itemsInWishlist: [],
    };

    const state = dataReducer(initialState, action);
    expect(state).toEqual({
      itemsInWishlist: [
        {
          _id: 123,
          name: "Jump Rope",
          inStock: true,
          fastDelivery: false,
        },
        {
          _id: 124,
          name: "Weighted Jump Rope",
          inStock: true,
          fastDelivery: true,
        },
        {
          _id: 125,
          name: "Crossrope get lean set",
          inStock: false,
          fastDelivery: false,
        },
      ],
    });
  });
});

test("should add product into wishlist & remove from cart if it exists", () => {
  const action = {
    type: "ADD_TO_WISHLIST",
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
        quantity: 3,
      },
      {
        _id: 124,
        name: "Weighted Jump Rope",
        inStock: true,
        fastDelivery: true,
        quantity: 1,
      },
    ],
    itemsInWishlist: [
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  state = dataReducer(state, action);
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: 124,
        name: "Weighted Jump Rope",
        inStock: true,
        fastDelivery: true,
        quantity: 1,
      },
    ],
    itemsInWishlist: [
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: 123,
        name: "Jump Rope",
        inStock: true,
        fastDelivery: false,
      },
    ],
    toastMsg: '"Jump Rope" added to wishlist',
  });
});

test("should remove product from wishlist", () => {
  const action = {
    type: "REMOVE_FROM_WISHLIST",
    payload: {
      _id: 123,
      name: "Jump Rope",
      inStock: true,
      fastDelivery: false,
    },
  };

  let state = {
    itemsInWishlist: [
      {
        _id: 123,
        name: "Jump Rope",
        inStock: true,
        fastDelivery: false,
      },
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  state = dataReducer(state, action);
  expect(state).toEqual({
    itemsInWishlist: [
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: '"Jump Rope" removed from wishlist',
  });
});

test("should move product into wishlist & remove from cart", () => {
  const action = {
    type: "MOVE_TO_WISHLIST",
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
        quantity: 3,
      },
      {
        _id: 124,
        name: "Weighted Jump Rope",
        inStock: true,
        fastDelivery: true,
        quantity: 1,
      },
    ],
    itemsInWishlist: [
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
    ],
    toastMsg: "",
  };

  state = dataReducer(state, action);
  expect(state).toEqual({
    itemsInCart: [
      {
        _id: 124,
        name: "Weighted Jump Rope",
        inStock: true,
        fastDelivery: true,
        quantity: 1,
      },
    ],
    itemsInWishlist: [
      {
        _id: 125,
        name: "Crossrope Get Lean Set",
        inStock: false,
        fastDelivery: true,
      },
      {
        _id: 123,
        name: "Jump Rope",
        inStock: true,
        fastDelivery: false,
      },
    ],
    toastMsg: '"Jump Rope" moved to wishlist',
  });
});
