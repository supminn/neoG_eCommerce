import axios from "axios";
import { API_URL } from "./apiDetails";

export const initializeUserWishlist = async (dispatch) => {
  try {
    const {
      data: { wishlistItems },
    } = await axios.get(`${API_URL}/wishlist/`);
    if (wishlistItems) {
      dispatch({ type: "SET_WISHLIST", payload: wishlistItems });
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Couldn't fetch wishlist items" });
    console.error(err);
  } 
};

export const updateWishlist = async (
  product,
  isWishlisted,
  dispatch,
  setShowLoader
) => {
  try {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Updating wishlist..." });
    const { data } = await axios.post(`${API_URL}/wishlist/`, {
      _id: product._id,
    });
    if (data.success) {
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
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Failed to update wishlist." });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};
