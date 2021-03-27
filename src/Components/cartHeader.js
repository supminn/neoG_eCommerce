import { useDataContext } from "../Context/data-context";

export const CartHeader = () => {
  const {state:{itemsInCart:items}} = useDataContext(); 
  return <b>Items in cart: {items.reduce((acc,curr) => acc+ curr.quantity,0)}</b>;
};