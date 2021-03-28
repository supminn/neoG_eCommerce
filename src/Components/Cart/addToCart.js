import { useDataContext } from "../../Context/data-context";

const itemExistsInCart = (cartItems, productId) => 
    cartItems.some(cartItem => cartItem.id === productId && cartItem.quantity>0);


export const AddToCart = ({product}) => {
    const {state:{itemsInCart},dispatch} = useDataContext();
    const isItemInCart = itemExistsInCart(itemsInCart,product.id);

    return(
        <>
        <button
        type="button"
        className={isItemInCart?"btn btn-primary":"btn btn-solid"}
        onClick={() => {
            isItemInCart?
            dispatch({type:"ROUTE", payload:"cart"})
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