export const products = [
  {
    id: 1,
    name: "kala chasma",
    image:"https://images-na.ssl-images-amazon.com/images/I/61VJqbsMxVL._UL1500_.jpg",
    price: 1000,
  },
  {
    id: 2,
    name: "laal ghadi",
    image:"https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_3.0,f_auto,w_500/5519219_png/crystalline-glam-watch--leather-strap--red--rose-gold-tone-pvd-swarovski-5519219.png",
    price: 500,
  },
  {
    id: 3,
    name: "jalebi",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Awadhi_jalebi.jpg",
    price: 50,
  },
  {
    id: 4,
    name: "japani joota",
    image:"https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg",
    price: 10000,
  },
];

export const Product = ({
  data: { id = null, name = "DefaultName", price = 0, image = null, quantity = 0 },
}) => {
  return (
    <div className="card">
      <img className="card-img" alt="card-image" src={image} />
      <h3 className="card-heading">{name}</h3>
      <p className="card-desc">₹{price}</p>
      {quantity && (<small>Quantity: {quantity}</small>)}
    </div>
  );
};