/* eslint-disable default-case */
import axios from "axios";
import { API_URL } from "./apiDetails";

export const initializeUserCart = async (dispatch) => {
  const {
    data: { cart },
  } = await axios.get(`${API_URL}/cart/`);
  if (cart) {
    dispatch({ type: "SET_CART", payload: cart });
  }
};

export const updateCart = async (
  product,
  actionOnUpdate,
  dispatch,
  setShowLoader
) => {
  try {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Updating cart..." });
    const { data } = await axios.post(`${API_URL}/cart/`, {
      _id: product._id,
      action: actionOnUpdate,
    });
    if (data.success) {
      switch (actionOnUpdate.toUpperCase()) {
        case "ADD":
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          });
          break;
        case "REMOVE":
          dispatch({
            type: "DECREMENT_FROM_CART",
            payload: product,
          });
          break;
        case "MOVE":
          const { data } = await axios.post(`${API_URL}/wishlist/`, {
            _id: product._id,
          });
          if (data.success) {
            dispatch({ type: "MOVE_TO_WISHLIST", payload: product });
          }
          break;
      }
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update cart data." });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const removeFromCart = async (product, dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Removing from cart..." });
    const { data } = await axios.put(`${API_URL}/cart/`, {
      _id: product._id,
    });
    if (data.success) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      });
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update cart data." });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const emptyCart = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const { data } = await axios.delete(`${API_URL}/cart/`);
    if (data.success) {
      dispatch({ type: "CLEAR_CART" });
    }
  } catch (error) {
    dispatch({
      type: "SHOW_TOAST",
      payload: " Could not empty cart, try again later",
    });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};
