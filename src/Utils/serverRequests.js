import axios from "axios";

export const updateWishlist = async (login, product, isWishlisted, userId, dispatch, navigate) => {
    if (!login) {
      navigate("/login");
    }
    const { status } = await axios.post(
      `http://localhost:5000/wishlist/${userId}`,
      {
        _id: product._id,
      }
    );
    if (isWishlisted) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product,
      });
    }
    else {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
    } 
  };