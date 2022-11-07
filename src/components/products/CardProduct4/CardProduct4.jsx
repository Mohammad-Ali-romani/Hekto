import { Link } from "react-router-dom";
import * as Bi from "react-icons/bi";
import "./card-product4.scss";
import PriceProduct from "../../PriceProduct/PriceProduct";

const CardProduct4 = ({ id, name, price, priceOld, image }) => {
  const urlImage = window.location.origin + "/products/" + image;
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
      <Link
        to={"/products/" + name.split(" ").join("-")}
        className="product-link"
      >
        <div className="product">
          <div className="box-img">
            <img src={urlImage} alt="" />
            <div className="buttons-hover">
              <a href="" className="icon-circle">
                <Bi.BiCart />
              </a>
              <a href="">
                <Bi.BiZoomIn />
              </a>
              <a href="">
                <Bi.BiHeart />
              </a>
            </div>
          </div>
          <h4 className="title-product">{name}</h4>
          <div className="icons-product">
            <span className="icon-product"></span>
            <span className="icon-product"></span>
            <span className="icon-product"></span>
          </div>
          <PriceProduct price={price} priceOld={priceOld} />
        </div>
      </Link>
    </div>
  );
};

export default CardProduct4;
