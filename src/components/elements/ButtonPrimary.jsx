import React from 'react'
import './../../sass/components/button-primary.scss'

const ButtonPrimary = (props) => {
  return (
    <button className='btn btn-hek-primary'>{props.children}</button>
  )
}

export default ButtonPrimary