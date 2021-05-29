import axios from "axios";
import { API_URL } from "./apiDetails";

export const fetchAllProducts = async (dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    const {
      data: { products },
    } = await axios.get(`${API_URL}/products`);
    dispatch({ type: "SET_PRODUCTS", payload: products });
    setShowLoader(false);
  } catch (err) {
    console.error(err);
  }
};
