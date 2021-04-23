import axios from "axios";

export const updateWishlist = async (
  login,
  product,
  isWishlisted,
  userId,
  dispatch,
  setShowLoader,
  navigate
) => {
  if (!login) {
    navigate("/login");
  }
  setShowLoader(true);
  dispatch({type:"SHOW_TOAST",payload:"Updating wishlist..."});
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
  dispatch({type:"SHOW_TOAST",payload:"Updating cart..."});
  const { status } = await axios.post(
    `https://api-supminn.herokuapp.com/cart/${userId}`,
    {
      _id: product._id,
      action: actionOnUpdate,
    }
  );
  // eslint-disable-next-line default-case
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
