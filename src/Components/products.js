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

export const Product = ({
  data: { id = null, name = "DefaultName", price = 0, quantity = 0 },
}) => {
  return (
    <div className="card">
      <img className="card-img" alt="card-image" src="https://static.toiimg.com/thumb/msid-54559212,width-748,height-499,resizemode=4,imgsize-307081/.jpg" />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      {quantity && (<small>Quantity: {quantity}</small>)}
    </div>
  );
};