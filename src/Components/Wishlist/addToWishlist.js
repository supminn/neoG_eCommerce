import { useNavigate } from "react-router";
import { useAuth } from "../../Context/auth-context";
import { useDataContext } from "../../Context/data-context";

const itemExistsInWishlist = (wishlistItems, productId) => 
    wishlistItems.some(wishlistItem => wishlistItem.id === productId);


export const AddToWishlist = ({product}) => {
    const {state:{itemsInWishlist},dispatch} = useDataContext();
    const isWishlisted = itemExistsInWishlist(itemsInWishlist,product.id);
    const {login} = useAuth();
    const navigate = useNavigate();

    return(
        <>
        <i
        className={isWishlisted?"fas fa-heart fa-lg wish-active":"far fa-heart fa-lg wish-inactive"}
        onClick={() => {
            isWishlisted?
            dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: product,
              })
            : login?
          dispatch({
            type: "ADD_TO_WISHLIST",
            payload: product,
          }): navigate("/login")
        }}
      ></i>
        </>
    )
}
