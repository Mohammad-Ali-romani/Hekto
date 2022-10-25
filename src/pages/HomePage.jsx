import power from "../assets/images/Home Page/background header.png";
import sofa from "../assets/images/Home Page/header.png";
import offer from "../assets/images/Home Page/svgs/offer.svg";
// components
import TitleSection from "../components/elements/TitleSection";
import ButtonPrimary from "../components/elements/ButtonPrimary";
import ShopexOffer from "../components/sections/ShopexOffer";

// -------------------------------------------------------------

// cards product
import CardProduct1 from "../components/products/CardProduct1";
import CardProduct2 from "../components/products/CardProduct2";
import featuredProduct1 from "../assets/images/Home Page/featured-products1.png";
import featuredProduct2 from "../assets/images/Home Page/featured-products2.png";
import featuredProduct3 from "../assets/images/Home Page/featured-products3.png";
import featuredProduct4 from "../assets/images/Home Page/featured-products4.png";
import Clubs from "./../components/elements/Clubs";
// images leatest product
import leatestProduct1 from "./../assets/images/Home Page/leatest-products1.png";
import leatestProduct2 from "./../assets/images/Home Page/leatest-products2.png";
import leatestProduct3 from "./../assets/images/Home Page/leatest-products3.png";
import leatestProduct4 from "./../assets/images/Home Page/leatest-products4.png";
import leatestProduct5 from "./../assets/images/Home Page/leatest-products5.png";
import leatestProduct6 from "./../assets/images/Home Page/leatest-products6.png";
// images icon shopx
import iconShopx1 from "./../assets/images/Home Page/icon-shopx1.png";
import iconShopx2 from "./../assets/images/Home Page/icon-shopx2.png";
import iconShopx3 from "./../assets/images/Home Page/icon-shopx3.png";
import iconShopx4 from "./../assets/images/Home Page/icon-shopx4.png";
// images trending products
import trendProducts from "./../assets/images/Home Page/trending-products.png";
import backTrendProducts from "./../assets/images/Home Page/svgs/back-trending.svg";

const HomePage = () => {
  function hoverCard(e) {
    document.querySelector(".clubs .club").style.opacity = 1;
  }
  return (
    <>
      <div className="slide-home ">
        <div className="box-power">
          <img src={power} alt="" className="image-power" />
        </div>
        <div className="container header-text">
          <div className="header-body">
            <h6 className="header-sub-title">
              Best Furniture For Your Castle....
            </h6>
            <h1 className="header-title">
              New furniture Collection Trends in 2020
            </h1>
            <p className="header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <ButtonPrimary>Shop Now</ButtonPrimary>
          </div>
        </div>
        <div className="box-sofa">
          <img src={sofa} alt="" className="image-sofa" />
          <div className="box-offer">
            <img src={offer} alt="" className="image-offer" />
            <span className="text-offer">50% off</span>
          </div>
        </div>
      </div>
      <section className="fearured-products">
        <TitleSection>Featured Products</TitleSection>
        <div className="container fearured-products-items">
          <div className="row ">
            <CardProduct1
              image={featuredProduct1}
              title={"Cantilever chair"}
              code="523201"
              price="42.00"
              onHover={hoverCard}
            />
            <CardProduct1
              image={featuredProduct2}
              title={"Cantilever chair"}
              code="523201"
              price="42.00"
              onHover={hoverCard}
            />
            <CardProduct1
              image={featuredProduct3}
              title={"Cantilever chair"}
              code="523201"
              price="42.00"
              onHover={hoverCard}
            />
            <CardProduct1
              image={featuredProduct4}
              title={"Cantilever chair"}
              code="523201"
              price="42.00"
              classN="d-lg-none d-xxl-flex"
              onHover={hoverCard}
            />
          </div>
        </div>
        <Clubs />
      </section>
      <section className="leatest-products">
        <TitleSection>Leatest Products</TitleSection>
        <div className="container">
          <ul className="nav d-flex justify-content-center list-leatest-products">
            <li className="nav-item">
              <a className="nav-link active">New Arrival</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Best Seller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Featured</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Special Offer</a>
            </li>
          </ul>
          <div className="row leatest-products-items">
            <CardProduct2 image={leatestProduct1} />
            <CardProduct2 image={leatestProduct2} />
            <CardProduct2 image={leatestProduct3} />
            <CardProduct2 image={leatestProduct4} />
            <CardProduct2 image={leatestProduct5} />
            <CardProduct2 image={leatestProduct6} />
          </div>
        </div>
      </section>
      <section className="shopex-offers">
        <TitleSection>What Shopex Offer!</TitleSection>
        <div className="container  shopex-offer-items">
          <div className="row">
            <ShopexOffer
              icon={iconShopx1}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <ShopexOffer
              icon={iconShopx2}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <ShopexOffer
              icon={iconShopx3}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <ShopexOffer
              icon={iconShopx4}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          </div>
        </div>
      </section>
      <section className="trending-products">
        <div className="container container-trending">
          <div className="row">
            <div className="col-md-6">
              <div className="box-image">
                <img src={backTrendProducts} alt="" className="back-trending" />
                <img src={trendProducts} alt="" className="image-trending" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="trending-body">
                <div>
                  <h2 className="trending-title">
                    Unique Features Of Leatest & Trending Products
                  </h2>
                  <ul className="trending-list-items">
                    <li className="trending-item">
                      <span className="icon-item-pick"></span>
                      <div className="trending-text">
                        All frames constructed with hardwood solids and
                        laminates
                      </div>
                    </li>
                    <li className="trending-item">
                      <span className="icon-item-blue"></span>
                      <div className="trending-text">
                        Reinforced with double wood dowels, glue, screw - nails
                        corner blocks and machine nails
                      </div>
                    </li>
                    <li className="trending-item">
                      <span className="icon-item-green"></span>
                      <div className="trending-text">
                        Arms, backs and seats are structurally reinforced
                      </div>
                    </li>
                  </ul>

                  <div className="d-flex">
                    <div className="box-button">
                      <ButtonPrimary>Add To Cart</ButtonPrimary>
                    </div>
                    <div className="box-price">
                      <span className="type-sofa">B&B Italian Sofa</span>
                      <span className="trending-price">$32.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
