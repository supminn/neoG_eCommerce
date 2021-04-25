import { useNavigate } from "react-router";
import { useAuthContext, useDataContext } from "../../../Context";
import { itemExists } from "../../../Utils/arrayOperations";
import { updateWishlist } from "../../../Utils/serverRequests";

export const AddToWishlist = ({ product }) => {
  const {
    state: { itemsInWishlist },
dispatch
  } = useDataContext();
  const { login, userData, setShowLoader } = useAuthContext();
  const navigate = useNavigate();
  const isWishlisted = itemExists(itemsInWishlist, product._id);

  return (
    <>
      <i 
        className={isWishlisted
            ? "fas fa-heart fa-lg wish-active"
            : "far fa-heart fa-lg wish-inactive"
        }
        onClick={() => login?updateWishlist(product, isWishlisted, userData._id, dispatch, setShowLoader):navigate("/login")}
      ></i>
    </>
  );
};
