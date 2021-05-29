import axios from "axios";
import { API_URL } from "./apiDetails";

export const fetchAllProducts = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { products },
    } = await axios.get(`${API_URL}/products`);
    if (products) {
      dispatch({ type: "SET_PRODUCTS", payload: products });
    }
  } catch (err) {
    dispatch({ type: "SHOW_TOAST", payload: "Couldn't fetch product list" });
    console.error(err);
  } finally {
    setShowLoader(false);
  }
};
