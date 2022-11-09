import { useParams } from "react-router-dom";
import { HeaderPage } from "../../components";
import { img1, img2, img3, img4 } from "./../../assets/images/single-product";
import * as Bi from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  AiFillHeart,
  AiFillInstagram,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import "./single-product.scss";
import PriceProduct from "../../components/PriceProduct/PriceProduct";
import ButtonPrimary from "../../components/elements/ButtonPrimary/ButtonPrimary";
import { useEffect, useState } from "react";
const SingleProduct = () => {
  const favorites = JSON.parse(localStorage.favorites ?? "{}");
  const { product, id } = useParams();
  const [imageHeader, setImageHeader] = useState(img4);
  const [images, setImages] = useState([img1, img2, img3]);
  const [favorite, setFavorite] = useState(
    favorites[product] ?? 0
  );
  const [productv, setProductv] = useState({});
  const name = product.split("-").join(" ");
  const evaluations = function () {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < productv.evaluation) stars.push(<AiFillStar />);
      else stars.push(<AiOutlineStar />);
    }
    return stars;
  };
  function toggleImage(image) {
    setImageHeader(image);
    let imgs = images;
    imgs[images.indexOf(image)] = imageHeader;
    setImages(imgs);
  }
  function favoriteProduct() {
    let data = favorite == 1 ? 0 : 1;
    setFavorite(data);
    favorites[product] = data;
    localStorage.favorites = JSON.stringify(favorites);
  }
  async function fetchData() {
    const data = await fetch("/server/products.json");
    const d = await data.json();
    setProductv(d.filter((product) => product.id == id)[0]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="single-product">
      <HeaderPage title="Product Details" />
      <div className="container">
        <div className="card-single-product row">
          <div className="col-md-2 col-5 d-sm-block d-none">
            <div className="d-flex flex-column justify-content-between h-100">
              {images.map((image, index) => (
                <div
                  key={index + 1}
                  onClick={() => toggleImage(image)}
                  className="box-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="col-md-4 col-sm-7 col-12 ">
            <div className="box-single-image m-auto">
              <img src={imageHeader} alt="this is image bag" id="imageHeader" />
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center">
            <div className="info-product mt-md-0 mt-3">
              <h2 className="title-single-product">{name}</h2>
              <div className="evaluation">
                {evaluations()}
                <span className="number-evaluation">(22)</span>
              </div>
              <PriceProduct
                price={productv.price}
                priceOld={productv.price_old}
              />
              <p className="description">{productv.description}</p>
              <ButtonPrimary>Add To Cart</ButtonPrimary>
              <span className="favorite" onClick={favoriteProduct}>
                {favorite == 1 ? <AiFillHeart /> : <AiOutlineHeart />}
              </span>
              <div className="box-share d-flex align-items-center  mt-2">
                <span className="sub-title">Share</span>
                <div className="social-media d-flex ">
                  <span
                    className="icon-social"
                    style={{ backgroundColor: "#1877f2" }}
                  >
                    <FaFacebookF />
                  </span>
                  <span
                    className="icon-social"
                    style={{ backgroundColor: "#c32aa3" }}
                  >
                    <AiFillInstagram />
                  </span>
                  <span
                    className="icon-social"
                    style={{ backgroundColor: "#1da1f2" }}
                  >
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
