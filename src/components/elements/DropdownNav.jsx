import * as Bi from 'react-icons/bi'

const Dropdown = ({ active, text ,items}) => {
  return (
    <li className="nav-item dropdown">
      <a className={"nav-link dropdown-toggle " + active} role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {text}
        {Array.isArray(items) && <span className='dropdown-icon'><Bi.BiChevronDown /></span>}
      </a>
      {Array.isArray(items) && <ul className="dropdown-menu">
        {items.map(item=><li><a className="dropdown-item" href='#'>{item}</a></li>)}
      </ul>}
    </li>
    
  )
}

export default Dropdown