export const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };

    case "SET_WISHLIST":
      return { ...state, itemsInWishlist: payload };

    case "SET_CART":
      return { ...state, itemsInCart: payload };

    case "SET_ADDRESS":
      return { ...state, addresses: payload };

    case "ADD_TO_CART":
      if (state.itemsInCart.some((cartItem) => cartItem._id === payload._id)) {
        return {
          ...state,
          toastMsg: `Cart updated successfully!`,
          itemsInWishlist: state.itemsInWishlist.filter(
            (wishItem) => wishItem._id !== payload._id
          ),
          itemsInCart: state.itemsInCart.map((cartItem) =>
            cartItem._id === payload._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          toastMsg: `"${payload.name}" added to cart`,
          itemsInWishlist: state.itemsInWishlist.filter(
            (wishItem) => wishItem._id !== payload._id
          ),
          itemsInCart: state.itemsInCart.concat({
            ...payload,
            quantity: 1,
          }),
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        toastMsg: `Cart updated successfully!`,
        itemsInCart: state.itemsInCart.map((cartItem) =>
          cartItem._id === payload._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };
    case "CLEAR_CART":
      return { ...state, itemsInCart: [] };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        toastMsg: `"${payload.name}" added to wishlist`,
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem._id !== payload._id
        ),
        itemsInWishlist: state.itemsInWishlist.concat({
          ...payload,
        }),
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        toastMsg: `"${payload.name}" removed from wishlist`,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item._id !== payload._id
        ),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        toastMsg: `"${payload.name}" moved to wishlist`,
        itemsInWishlist: state.itemsInWishlist.concat(payload),
        itemsInCart: state.itemsInCart.filter(
          (cartItem) => cartItem._id !== payload._id
        ),
      };

    case "SORT":
      return { ...state, sortBy: payload };
    case "TOGGLE_STOCK":
      return { ...state, inStock: !state.inStock };
    case "TOGGLE_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "PRICE_RANGE":
      return { ...state, priceRange: payload };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sortBy: null,
        inStock: false,
        fastDelivery: false,
        priceRange: 1000,
        searchValue: "",
      };
    case "SEARCH_PRODUCT":
      return { ...state, searchValue: payload.toLowerCase() };

    case "SHOW_TOAST":
      return { ...state, toastMsg: payload };

    case "ADD_ADDRESS":
      payload._id = state.addresses.length + 1;
      return {
        ...state,
        toastMsg: "New address added successfully",
        addresses: state.addresses.concat(payload),
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        toastMsg: "Address updated successfully",
        addresses: state.addresses.map((address) =>
          address._id === payload._id ? payload : address
        ),
      };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        toastMsg: "Address removed",
        addresses: state.addresses.filter((address) => address._id !== payload),
      };

    default:
      return state;
  }
};
