import ListItemsFooter from "../../components/elements/ListItemsFooter/ListItemsFooter";
import "./footer.scss";
import "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main mt-5 px-3 px-md-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 ">
              <h2 className="title-footer">Hekto</h2>
              <form action="" method="post">
                <div className="d-flex position-relative from-group-footer  mt-4">
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="input-footer"
                  />
                  <button className="btn-footer px-4">Sign Up</button>
                </div>
              </form>
              <p className="mt-3">
                Contact Info <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
            <div className="col-lg-7 ">
              <div className="row">
                <ListItemsFooter
                  title="Categories"
                  items={[
                    "Laptops & Computers",
                    "Cameras & Photography",
                    "Smart Phones & Tablets",
                    "Video Games & Consoles",
                    "Waterproof Headphones",
                  ]}
                />
                <ListItemsFooter
                  title="Cutomer Care"
                  items={[
                    "My Account",
                    "Discount",
                    "Returns",
                    "Orders History",
                    "Order Tracking",
                  ]}
                />
                <ListItemsFooter
                  title="Pages"
                  items={[
                    "Blog",
                    "Browse the Shop",
                    "Category",
                    "Pre-Built Pages",
                    "Visual Composer Elements",
                    "WooCommerce Pages",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="copy-right mb-3 mb-md-0">&copy;webecy - all Rights Reserved</div>
          </div>
          <div className="col-md-6">
            <div className="social-media ">
              <span className="icon-social"><FaFacebookF /></span>
              <span className="icon-social"><FaInstagram /></span>
              <span className="icon-social"><FaTwitter /></span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
