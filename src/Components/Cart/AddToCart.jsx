import { useAuthContext,useDataContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { updateCart, updateWishlist } from "../../Utils/serverRequests";
import { itemExists } from "../../Utils/arrayOperations";

const itemExistsInCart = (cartItems, productId) =>
  cartItems.some(
    (cartItem) => cartItem._id === productId && cartItem.quantity > 0
  );

export const AddToCart = ({ product }) => {
  const {
    state: { itemsInCart, itemsInWishlist },
    dispatch,
  } = useDataContext();
  const { login, userData ,showLoader, setShowLoader} = useAuthContext();
  const isItemInCart = itemExistsInCart(itemsInCart, product._id);
  const navigate = useNavigate();
  const isWishlisted = itemExists(itemsInWishlist, product._id);

  const updateLists = () => {
    updateWishlist(
      product,
      isWishlisted,
      userData._id,
      dispatch,
      setShowLoader
    );
    updateCart(product, "ADD", userData._id, dispatch, setShowLoader);
  };
  return (
    <>
      <button
        type="button"
        disabled={!product.inStock || showLoader}
        className={isItemInCart ? "btn btn-primary" : "btn btn-solid"}
        onClick={() => {
          isItemInCart
            ? navigate("/cart")
            : login
            ? isWishlisted
              ? updateLists()
              : updateCart(
                  product,
                  "ADD",
                  userData._id,
                  dispatch,
                  setShowLoader
                )
            : dispatch({
                type: "ADD_TO_CART",
                payload: product,
              });
        }}
      >
        {isItemInCart ? "Go to Cart" : "Add to Cart"}
      </button>
    </>
  );
};