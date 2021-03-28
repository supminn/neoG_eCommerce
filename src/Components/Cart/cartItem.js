import { useDataContext } from "../../Context/data-context";

export const CartItem = ({item}) => {
    const {name, image, price, quantity} = item;
    const {dispatch} = useDataContext();
  return (
    <div className="card">
      <img className="card-img" alt={name} src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{(price*quantity).toFixed(2)}</p>
      <span className="font-sm"><button type="button" className="btn btn-light btn-sm" onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:item})}>-</button>
            <em>{quantity}</em>
            <button type="button" className="btn btn-light btn-sm" onClick={() => dispatch({type:"ADD_TO_CART",payload:item})}>+</button>
            </span>
    </div>
  );
}