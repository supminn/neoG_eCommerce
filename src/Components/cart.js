import { useCart } from "../Context/cart-context"
import { Product } from '../Components';

export const Cart = () => {
    const {itemsInCart, addToCart, removeFromCart, clearCart} = useCart();
    const cartTotal = itemsInCart.reduce((acc, item)=> acc+(item.price * item.quantity),0);
    return(
        <>
        <h2>Cart Items</h2>
        {itemsInCart.map(item => (
            <div key={item.id}>
            <Product data={item}/>
            <label>Quantity: </label>
            <button type="button" className="btn btn-light" onClick={() => removeFromCart(item)}>-</button>
            <em>{item.quantity}</em>
            <button type="button" className="btn btn-light" onClick={() => addToCart(item)}>+</button>
            </div>
        ))}
        {itemsInCart.length>0 && (<><h3>Cart Total: {cartTotal}</h3>
        <button type="button" className="btn btn-dark" onClick={() => clearCart()}>Remove All</button></>)}
        </>
    )
}