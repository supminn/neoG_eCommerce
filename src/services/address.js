import axios from "axios";
import { API_URL } from "./apiDetails";

export const initializeUserAddresses = async (dispatch) => {
  try {
    const {
      data: { address },
    } = await axios.get(`${API_URL}/address/`);
    if (address) {
      dispatch({ type: "SET_ADDRESS", payload: address });
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to fetch address data." });
    console.error(error);
  }
};

export const updateUserAddress = async (address, dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Updating address..." });
    const { data } = await axios.post(`${API_URL}/address/`, {
      ...address,
    });
    if (data.success) {
      if (address._id) {
        dispatch({ type: "UPDATE_ADDRESS", payload: address });
      } else {
        dispatch({ type: "ADD_ADDRESS", payload: address });
      }
    }
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to update address data." });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};

export const removeUserAddress = async (_id, dispatch, setShowLoader) => {
  try {
    setShowLoader(true);
    dispatch({ type: "SHOW_TOAST", payload: "Updating address..." });
    const { data } = await axios.put(`${API_URL}/address/`, { _id });
    console.log(data);
    dispatch({ type: "REMOVE_ADDRESS", payload: _id });
  } catch (error) {
    dispatch({ type: "SHOW_TOAST", payload: "Unable to delete address data." });
    console.error(error);
  } finally {
    setShowLoader(false);
  }
};
