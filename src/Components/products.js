export const Product = ({
  data: { id = null, name = "DefaultName", price = 0, image = null, quantity = 0 },
}) => {
  return (
    <div className="card">
      <img className="card-img" alt="product" src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      {quantity>0 && (<small>Quantity: {quantity}</small>)}
    </div>
  );
};