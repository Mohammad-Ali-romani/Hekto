import "./../../sass/components/card-product3.scss";

const CardProduct3 = ({ title, image, price, priceOffer }) => {
  return (
    <div className=" col-xl-3 col-md-6">
      <div className="card card-product-3">
        <div className="card-box-img d-flex justify-content-center align-items-center">
            <img src={image} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="price d-flex align-items-center justify-content-center">
            <span className="price-compese me-2">${price}</span>
            <span className="price-offer ">${priceOffer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct3;
