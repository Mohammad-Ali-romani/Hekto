import LineCard from '../elements/LineCard'
import './../../sass/components/card-product1.scss'
import * as Bi from 'react-icons/bi'

const CardProduct1 = ({ image, title, code, price,classN ,onHover}) => {
  return (
    <div className={"col-xxl-3 col-lg-4 col-md-6 "+(classN ? classN : "")}>
      <div className='card-product1' onMouseEnter={onHover}>
        <div className="buttons-hover">
          <a href="" className='icon-circle'><Bi.BiCart /></a>
          <a href=""><Bi.BiHeart /></a>
          <a href=""><Bi.BiZoomIn /></a>
        </div>
        <div className='card-product1-image'>
          <img src={image} alt="" />
          <button className="btn btn-hek-success">View Details</button>
        </div>
        <div className="card-product1-body">
          <h4 className='card-product1-title'>{title}</h4>
          <LineCard />
          <h5 className="card-product1-code">Code - Y {code}</h5>
          <span className='card-product1-price'>${price}</span>
        </div>
      </div>
    </div>
  )
}

export default CardProduct1