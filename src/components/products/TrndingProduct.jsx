import "../../sass/components/trnding-product.scss";

const TrndingProduct = ({ name, price, image }) => {
  return (
    <div className="trnding-product d-flex align-items-center m-auto m-lg-0">
      <div className="box-image">
        <img src={image} alt="" />
      </div>
      <div className="ps-2">
        <h6 className="name-product mb-0">{name}</h6>
        <span className="price-product">${price}</span>
      </div>
    </div>
  );
};

export default TrndingProduct;
