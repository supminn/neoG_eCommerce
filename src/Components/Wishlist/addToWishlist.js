import { useDataContext } from "../../Context/data-context";

const itemExistsInWishlist = (wishlistItems, productId) => 
    wishlistItems.some(wishlistItem => wishlistItem.id === productId);


export const AddToWishlist = ({product}) => {
    const {state:{itemsInWishlist},dispatch} = useDataContext();
    const isWishlisted = itemExistsInWishlist(itemsInWishlist,product.id);

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
            :
          dispatch({
            type: "ADD_TO_WISHLIST",
            payload: product,
          });
        }}
      ></i>
        </>
    )
}
