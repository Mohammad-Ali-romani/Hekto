import { useParams } from "react-router-dom";
import { HeaderPage } from "../../components";
import { img1, img2, img3, img4 } from "./../../assets/images/single-product";
import * as Bi from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./single-product.scss";
import PriceProduct from "../../components/PriceProduct/PriceProduct";
import ButtonPrimary from "../../components/elements/ButtonPrimary/ButtonPrimary";

const SingleProduct = () => {
  const { product } = useParams();
  const name = product.split("-").join(" ");
  return (
    <div className="single-product">
      <HeaderPage title={`Product - ${name}`} />
      <div className="container">
        <div className="card-single-product row">
          <div className="col-md-2">
            <div className="d-flex flex-column justify-content-between h-100">
              <div
                className="box-image"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div
                className="box-image"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div
                className="box-image"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box-single-image">
              <img src={img4} alt="this is image bag" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="info-product">
              <h2 className="title-single-product">Playwood arm chair</h2>
              <div className="evaluation">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiOutlineStar></AiOutlineStar>
                <span className="number-evaluation">(22)</span>
              </div>
              <PriceProduct price={32.0} priceOld={44.0} />
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur iste nesciunt itaque, eligendi, dolorum, in enim
                sapiente ex repellat doloremque impedit similique fugit mollitia
                corrupti sed est magnam natus. Iure.
              </p>
              <ButtonPrimary>Add To Cart</ButtonPrimary>
              <span className="favorite">
                <Bi.BiHeart />
              </span>
              <div className="box-share d-flex align-items-center  mt-2">
                <span className="sub-title">Share</span>
                <div className="social-media d-flex ">
                  <span className="icon-social" style={{backgroundColor: "#1877f2"}}>
                    <FaFacebookF />
                  </span>
                  <span className="icon-social" style={{backgroundColor: "#c32aa3"}}>
                    <AiFillInstagram />
                  </span>
                  <span className="icon-social" style={{backgroundColor: "#1da1f2"}}>
                    <FaTwitter />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
