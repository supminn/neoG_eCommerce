import { useState } from "react";
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
  const [showLoader, setShowLoader] = useState(false);

  return (
    <>
      <i 
        className={showLoader?"fa fa-spinner fa-pulse wish-loading"
          :isWishlisted
            ? "fas fa-heart fa-lg wish-active"
            : "far fa-heart fa-lg wish-inactive"
        }
        onClick={() => showLoader?"":updateWishlist(login, product, isWishlisted, userData._id, dispatch, setShowLoader, navigate)}
      ></i>
    </>
  );
};
