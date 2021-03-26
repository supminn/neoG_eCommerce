export const products = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000,
  },
  {
    id: 2,
    name: "laal ghadi",
    price: 500,
  },
  {
    id: 3,
    name: "jalebi",
    price: 50,
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000,
  },
];

export const Product = ({data:{ id = null, name = "DefaultName", price = 0, quantity=0 }}) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <small>₹{price}</small>
    </div>
  );
};
