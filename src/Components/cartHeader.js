import { useCart } from "../Context/cart-context";

export const CartHeader = () => {
  const {itemsInCart: items} = useCart(); 
  return <b>Items in cart: {items.reduce((acc,curr) => acc+ curr.quantity,0)}</b>;
};