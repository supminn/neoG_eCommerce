import { useDataContext } from "../../Context/data-context";
import { useNavigate } from "react-router-dom";

const itemExistsInCart = (cartItems, productId) => 
    cartItems.some(cartItem => cartItem.id === productId && cartItem.quantity>0);



export const AddToCart = ({product}) => {
    const {state:{itemsInCart},dispatch} = useDataContext();
    const isItemInCart = itemExistsInCart(itemsInCart,product.id);
    const navigate = useNavigate();
    return(
        <>
        <button
        type="button" disabled={!product.inStock}
        className={isItemInCart?"btn btn-primary":"btn btn-solid"}
        onClick={() => {
            isItemInCart?
            navigate('/cart')
            :
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          });
        }}
      >
       {isItemInCart?"Go to Cart":"Add to Cart"}
      </button>
        </>
    )
}