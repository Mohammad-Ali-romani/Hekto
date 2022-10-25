import './../../sass/components/shopex-offer.scss'


const ShopexOffer = ({icon,title,description}) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6">
      <div className="shopex-offer">
        <div className="shopex-icon">
          <img src={icon} alt="" className="shopex-image" />
        </div>
        <h4 className="shopex-title">{title}</h4>
        <p className="shopex-description">{description}</p>
      </div>
    </div>
  )
}

export default ShopexOffer