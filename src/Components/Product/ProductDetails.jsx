import { useLocation } from "react-router";

export const ProductDetails = () => {
  const {
    state: {
      product: {
        name,
        image,
        price,
        brand,
        category,
        fastDelivery,
        inStock,
        offer,
        rating,
      },
    },
  } = useLocation();
//   const fullRating = [1,2,3,4,5];
//   const halfRating = [1.5,2.5,3.5,4.5];

  return (
    <>
      <h2>Product Detail Page - coming soon...</h2>
      <div className="card-horizontal">
        <img className="card-img" src={image} alt="product" />
        <section className="card-details-container">
          <h3 className="card-heading">{name}</h3>
            <div className='rating'>
                <i className='fa fa-star fa-lg rating-checked'></i>
                <i className='fa fa-star fa-lg rating-checked'></i>
                <i className='fa fa-star fa-lg rating-checked'></i>
                <i className='fa fa-star-half-alt fa-lg rating-checked'></i>
                <i className='fa fa-star fa-lg'></i>
            </div>
          {/* <div className="cart-item-desc-content"> */}
            <p className="card-heading">Brand: {brand}</p>
            <p className="txt-small">{category}</p>
            <b className="card-desc">₹{(price).toFixed(2)} </b>
            <span className="card-discount txt-small"> ({offer})</span>
            <div className="rating">
              <span className="txt-primaryBg">Rating: </span>
              <span className="rating-block txt-small">
                {rating}
                <i
                  className="fa fa-star fa-sm 
                  rating-checked"
                >
                  {" "}
                </i>
              </span>
            </div>
          {/* </div> */}
        </section>
      </div>
    </>
  );
};
