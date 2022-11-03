import "./card-product4.scss";

const CardProduct4 = ({ name, price, priceOld, image }) => {
  const urlImage = window.location.origin + "/products/" + image;
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <div className="product">
        <div className="box-img">
          <img src={urlImage} alt="" />
        </div>
        <h4 className="title-product">{name}</h4>
        <div className="icons-product">
          <span className="icon-product"></span>
          <span className="icon-product"></span>
          <span className="icon-product"></span>
        </div>
        <div className="box-price">
          <span className="price">${price.toFixed(2)}</span>
          <span className="price-old">${priceOld.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct4;
