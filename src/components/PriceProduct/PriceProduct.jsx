import "./PriceProduct.scss";

const PriceProduct = ({price,priceOld}) => {
  return (
    <div className="price-product">
      <span className="price">${parseFloat(price).toFixed(2)}</span>
      <span className="price-old">${parseFloat(priceOld).toFixed(2)}</span>
    </div>
  );
};

export default PriceProduct;
