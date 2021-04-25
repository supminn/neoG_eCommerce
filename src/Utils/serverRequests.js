/* eslint-disable default-case */
import axios from "axios";

export const updateWishlist = async (
  product,
  isWishlisted,
  userId,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
  dispatch({ type: "SHOW_TOAST", payload: "Updating wishlist..." });
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/wishlist/${userId}`,
    {
      _id: product._id,
    }
  );
  if (isWishlisted) {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
  } else {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  }
  setShowLoader(false);
};

export const updateCart = async (
  product,
  actionOnUpdate,
  userId,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
  dispatch({ type: "SHOW_TOAST", payload: "Updating cart..." });
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/cart/${userId}`,
    {
      _id: product._id,
      action: actionOnUpdate,
    }
  );
  switch (actionOnUpdate.toUpperCase()) {
    case "ADD":
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
      break;
    case "REMOVE":
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      });
      break;
    case "MOVE":
      const { status } = await axios.post(
        `https://api-supminn.herokuapp.com/wishlist/${userId}`,
        {
          _id: product._id,
        }
      );
      dispatch({ type: "MOVE_TO_WISHLIST", payload: product });
      break;
  }
  setShowLoader(false);
};

export const updateUserAddress = async (
  address,
  userId,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
  dispatch({ type: "SHOW_TOAST", payload: "Updating address..." });
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/address/${userId}`,
    {
      ...address,
    }
  );
  if (address._id) {
    dispatch({ type: "UPDATE_ADDRESS", payload: address });
  } else {
    dispatch({ type: "ADD_ADDRESS", payload: address });
  }
  setShowLoader(false);
};

export const removeUserAddress = async (
  _id,
  userId,
  dispatch,
  setShowLoader
) => {
  setShowLoader(true);
  dispatch({ type: "SHOW_TOAST", payload: "Updating address..." });
  const { status } = await axios.put(
    `https://api-supminn.herokuapp.com/address/${userId}`,
      {_id}
  );
  dispatch({ type: "REMOVE_ADDRESS", payload: _id });
  setShowLoader(false);
};
