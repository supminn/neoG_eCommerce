import axios from "axios";

export const updateWishlist = async (login, product, isWishlisted, userId, dispatch, setShowLoader, navigate) => {
    if (!login) {
      navigate("/login");
    }
    setShowLoader(true);
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
    }
    else {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
    } 
    setShowLoader(false);
  };