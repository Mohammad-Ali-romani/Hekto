import "./PriceProduct.scss";

const PriceProduct = ({price,priceOld}) => {
  return (
    <div className="price-product">
      <span className="price">${price.toFixed(2)}</span>
      <span className="price-old">${priceOld.toFixed(2)}</span>
    </div>
  );
};

export default PriceProduct;
