import { useNavigate } from "react-router";
import { useAuthContext, useDataContext } from "../../../Context";
import { itemExists } from "../../../Utils/arrayOperations";
import { updateWishlist } from "../../../Utils/serverRequests";

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
dispatch
  } = useDataContext();
  const { login, userData } = useAuthContext();
  const navigate = useNavigate();
  const isWishlisted = itemExists(itemsInWishlist, product._id);

  return (
    <>
      <i
        className={isWishlisted
            ? "fas fa-heart fa-lg wish-active"
            : "far fa-heart fa-lg wish-inactive"
        }
        onClick={() => updateWishlist(login, product, isWishlisted, userData._id, dispatch, navigate)}
      ></i>
    </>
  );
};

/*
  const updateWishlist = async () => {
    if (!login) {
      navigate("/login");
    }
    const { status } = await axios.post(
      `http://localhost:5000/wishlist/${userData._id}`,
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
*/

/*
   onClick={() => {
          isWishlisted
            ? dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              })
            : dispatch({
                type: "ADD_TO_WISHLIST",
                payload: product,
              }); if(!login)navigate("/login");
        }}


          // dispatch({ type: "SET_WISHLIST", payload: wishlistItems });
    // setShowLoader(false);
    // dispatch({
    //   type: "SHOW_TOAST",
    //   payload: isWishlisted
    //     ? `${product.name} removed from wishlist`
    //     : `${product.name} added wishlist`,
    // });
        */
