import { Link } from "react-router-dom";
import "./off-product.scss";

const OffProduct = ({ title, textLink, color, image, urlLink }) => {
  return (
    <div className="col-md-12 col-lg-6 mt-4 mt-lg-0 px-md-5 px-lg-0">
      <div className="off-product" style={{ backgroundColor: color }}>
        <div className="off-product-container">
          <h3 className="off-product-title">{title}</h3>
          <Link to={urlLink} className="off-product-link">
            {textLink}
          </Link>
        </div>
        <img
          src={image}
          alt=""
          className="off-product-img ms-auto d-block me-2"
        />
      </div>
    </div>
  );
};
// color={color}
export default OffProduct;
