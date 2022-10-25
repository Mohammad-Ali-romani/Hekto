import * as Bi from "react-icons/bi";
import './../../sass/pages/home-page.scss'

const TopHeader = () => {
  return (
    <div className='top-header d-none d-md-block'>
      <div className='container-lg'>
        <div className="row">
          <div className="col-md-6">
            <ul className="d-flex list-items-top">
              <li className='item-top me-5'>
                <Bi.BiEnvelope className='me-1' />
                mhhasanul@gmail.com
              </li>
              <li className='item-top'>
                <Bi.BiPhoneCall className='me-1' />
                (12345)67890
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className='d-flex list-items-top justify-content-end'>
              <li className="dropdown item-top ms-2">
                <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  English
                  <span className='dropdown-icon'><Bi.BiChevronDown /></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Arabic</a></li>
                  <li><a className="dropdown-item" href="#">Spain</a></li>
                </ul>
              </li>
              <li className="dropdown item-top ms-3">
                <a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                  <span className='dropdown-icon'><Bi.BiChevronDown /></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Arabic</a></li>
                  <li><a className="dropdown-item" href="#">Spain</a></li>
                </ul>
              </li>
              <li className="item-top ms-3"><a href="">Login <Bi.BiUser /> </a></li>
              <li className="item-top ms-3 d-none d-lg-block"><a href="">WishList <Bi.BiHeart /> </a></li>
              <li className="item-top ms-3"><a href=""> <Bi.BiCart /> </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader