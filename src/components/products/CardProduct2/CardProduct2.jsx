import * as Bi from "react-icons/bi";
import "./card-product2.scss";
import saleImage from "./../../../assets/images/Home Page/svgs/sale.svg";

const CardProduct2 = ({ image }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 ">
      <div className=" card-product2">
        <div className="box-image-card-product2">
          <img src={image} alt=" " />
          <div className="sale-image">
            <img src={saleImage} alt="sale"  />
            <span className="sale-text">Sale</span>
          </div>
          <div className="buttons-hover">
            <a href="" className="icon-circle">
              <Bi.BiCart />
            </a>
            <a href="">
              <Bi.BiHeart />
            </a>
            <a href="">
              <Bi.BiZoomIn />
            </a>
          </div>
        </div>
        <div className="body-card-product2 d-flex">
          <h5 className="title-card-product2">Comfort Handy Craft</h5>
          <div className="box-price">
            <span className="price-actived">$42.00</span>
            <span className="price-unactived">$65.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct2;
