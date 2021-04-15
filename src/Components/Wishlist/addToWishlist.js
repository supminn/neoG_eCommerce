import { useNavigate } from "react-router";
import { useAuthContext, useDataContext } from "../../Context";

const itemExistsInWishlist = (wishlistItems, productId) =>
  wishlistItems.some((wishlistItem) => wishlistItem.id === productId);

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useDataContext();
  const isWishlisted = itemExistsInWishlist(itemsInWishlist, product.id);
  const { login } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <i
        className={
          isWishlisted
            ? "fas fa-heart fa-lg wish-active"
            : "far fa-heart fa-lg wish-inactive"
        }
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
      ></i>
    </>
  );
};
