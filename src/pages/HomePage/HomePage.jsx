import power from "../../assets/images/Home Page/background header.png";
import sofa from "../../assets/images/Home Page/header.png";
import offer from "../../assets/images/Home Page/svgs/offer.svg";
// components
import TitleSection from "../../components/elements/TitleSection/TitleSection";
import ButtonPrimary from "../../components/elements/ButtonPrimary/ButtonPrimary";
import ShopexOffer from "../../components/sections/ShopexOffer/ShopexOffer";

// -------------------------------------------------------------

// cards product
import CardProduct1 from "../../components/products/CardProduct1/CardProduct1";
import CardProduct2 from "../../components/products/CardProduct2/CardProduct2";
import featuredProduct1 from "../../assets/images/Home Page/featured-products1.png";
import featuredProduct2 from "../../assets/images/Home Page/featured-products2.png";
import featuredProduct3 from "../../assets/images/Home Page/featured-products3.png";
import featuredProduct4 from "../../assets/images/Home Page/featured-products4.png";
import Clubs from "./../../components/elements/Clubs/Clubs";
// images leatest product
import leatestProduct1 from "./../../assets/images/Home Page/leatest-products1.png";
import leatestProduct2 from "./../../assets/images/Home Page/leatest-products2.png";
import leatestProduct3 from "./../../assets/images/Home Page/leatest-products3.png";
import leatestProduct4 from "./../../assets/images/Home Page/leatest-products4.png";
import leatestProduct5 from "./../../assets/images/Home Page/leatest-products5.png";
import leatestProduct6 from "./../../assets/images/Home Page/leatest-products6.png";
// images icon shopx
import iconShopx1 from "./../../assets/images/Home Page/icon-shopx1.png";
import iconShopx2 from "./../../assets/images/Home Page/icon-shopx2.png";
import iconShopx3 from "./../../assets/images/Home Page/icon-shopx3.png";
import iconShopx4 from "./../../assets/images/Home Page/icon-shopx4.png";
// images trending products
import trendingProduct1 from "./../../assets/images/Home Page/trending-product-1.png";
import trendingProduct2 from "./../../assets/images/Home Page/trending-product-2.png";
import trendingProduct3 from "./../../assets/images/Home Page/trending-product-3.png";
import trendingProduct4 from "./../../assets/images/Home Page/trending-product-4.png";
// off products
import offProduct1 from "./../../assets/images/Home Page/off-product-1.png";
import offProduct2 from "./../../assets/images/Home Page/off-product-2.png";
// trnding products list
import trProduct1 from "./../../assets/images/Home Page/tre-1.png";
import trProduct2 from "./../../assets/images/Home Page/tre-2.png";
import trProduct3 from "./../../assets/images/Home Page/tre-3.png";
// images trending products
import trendProducts from "./../../assets/images/Home Page/trending-products.png";
import backTrendProducts from "./../../assets/images/Home Page/svgs/back-trending.svg";
import CardProduct3 from "../../components/products/CardProduct3/CardProduct3";
import OffProduct from "../../components/sections/OffProduct/OffProduct";
import TrndingProduct from "../../components/products/TrndingProduct/TrndingProduct";
import companies from "./../../assets/images/Home Page/companies.png";
import './home-page.scss'
const HomePage = () => {
  function hoverCard(e) {
    document.querySelector(".clubs .club").style.opacity = 1;
  }
  return (
    <>
      <div className="slide-home">
        <div className="box-power">
          <img src={power} alt="" className="image-power" />
        </div>
        <div className="container header-text">
          <div className="header-body">
            <h6 className="header-sub-title">
              Best Furniture For Your Castle....
            </h6>
            <h1 className="header-title">
              New furniture Collection<br/>Trends in 2020
            </h1>
            <p className="header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing<br/>in phasellus non in justo.
            </p>
            <ButtonPrimary>Shop Now</ButtonPrimary>
          </div>
          <div className="box-sofa">
          <img src={sofa} alt="" className="image-sofa" />
          <div className="box-offer">
            <img src={offer} alt="" className="image-offer" />
            <span className="text-offer">50% off</span>
          </div>
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
      {/* unique-features-of-leatest */}
      <section className="unique-features-of-leatest">
        <div className="container container-trending">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="box-image">
                <img src={backTrendProducts} alt="" className="back-trending" />
                <img src={trendProducts} alt="" className="image-trending" />
              </div>
            </div>
            <div className="col-lg-6 ">
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
      {/* trending-products */}
      <section className="trending-products">
        <TitleSection>Trending Products</TitleSection>
        <div className="container">
          <div className="row">
            <CardProduct3
              title="Cantilever chair"
              image={trendingProduct1}
              price="26.00"
              priceOffer="42.00"
            />
            <CardProduct3
              title="Cantilever chair"
              image={trendingProduct2}
              price="26.00"
              priceOffer="42.00"
            />
            <CardProduct3
              title="Cantilever chair"
              image={trendingProduct3}
              price="26.00"
              priceOffer="42.00"
            />
            <CardProduct3
              title="Cantilever chair"
              image={trendingProduct4}
              price="26.00"
              priceOffer="42.00"
              className="d-lg-none d-xxl-flex"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <OffProduct
                  title="23% off in all products"
                  textLink="Shop Now"
                  color="#FFF6FB"
                  image={offProduct1}
                  urlLink="#"
                />
                <OffProduct
                  title="23% off in all products"
                  textLink="View Collection"
                  color="#EEEFFB"
                  image={offProduct2}
                  urlLink="#"
                />
              </div>
            </div>
            <div className="col-lg-3 col-xm-12 d-none d-lg-flex justify-content-between flex-column">
              <TrndingProduct
                name="Executive Seat chair"
                price="32.00"
                image={trProduct1}
              />
              <TrndingProduct
                name="Executive Seat chair"
                price="32.00"
                image={trProduct2}
              />
              <TrndingProduct
                name="Executive Seat chair"
                price="32.00"
                image={trProduct3}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe d-flex justify-content-center align-items-center mt-5">
        <div className="text-center ">
          <h2 className="title-subsribe">
            Get Leatest Update By subscribe
            <br /> Our Newslater
          </h2>
          <ButtonPrimary>Shop Now</ButtonPrimary>
        </div>
      </section>
      <section className="companies text-center">
        <img src={companies} alt="" className="image-companies" />
      </section>
    </>
  );
};

export default HomePage;
