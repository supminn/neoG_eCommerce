import { useNavigate } from "react-router";
import { useAuthContext, useDataContext } from "../../../Context";
import { itemExists } from "../../../Utils/arrayOperations";
import { updateWishlist } from "../../../services";

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
    dispatch,
  } = useDataContext();
  const { login, setShowLoader } = useAuthContext();
  const navigate = useNavigate();
  const isWishlisted = itemExists(itemsInWishlist, product._id);

  return (
    <>
      <i
        className={
          isWishlisted
            ? "fas fa-heart fa-lg wish-active"
            : "far fa-heart fa-lg wish-inactive"
        }
        onClick={() =>
          login
            ? updateWishlist(product, isWishlisted, dispatch, setShowLoader)
            : navigate("/login")
        }
      ></i>
    </>
  );
};
