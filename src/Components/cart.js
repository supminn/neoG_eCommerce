import { useDataContext } from "../Context/data-context"
import { Product } from '../Components';

export const Cart = () => {
    const {state:{itemsInCart}, dispatch} = useDataContext();
    const cartTotal = itemsInCart.reduce((acc, item)=> acc+(item.price * item.quantity),0);
    return(
        <>
        <h2>Cart Items</h2>
        {itemsInCart.map(item => item.quantity>0 && (
            <div key={item.id}>
            <Product data={item}/>
            <label>Quantity: </label>
            <button type="button" className="btn btn-light" onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:item})}>-</button>
            <em>{item.quantity}</em>
            <button type="button" className="btn btn-light" onClick={() => dispatch({type:"ADD_TO_CART",payload:item})}>+</button>
            </div>
        ))}
        {itemsInCart.length>0 && (<><h3>Cart Total: {cartTotal}</h3>
        <button type="button" className="btn btn-dark" onClick={() => dispatch({type:"CLEAR_CART"})}>Remove All</button></>)}
        </>
    )
}