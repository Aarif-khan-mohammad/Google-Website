import React from 'react'
import { NavLink ,withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'


const Header = (props) => {
  const onClickLogout = ()=>{
    const {history} = props
    Cookies.remove("jwt_token")
    history.replace("/login")
  }
  return (
    <header className='header'>
      <img src='https://i.ibb.co/wR9bYj1/google-logo.png' className='logo' alt='logo' />
      <ul className='sections'>
        <li className='item-1 ho'><NavLink className="links" to="/" >Home</NavLink></li>
        <li className='item-2 ho'><NavLink className="links" to="/products" >Products</NavLink></li>
        <li className='item-3 ho'><NavLink className="links" to="/about" >About</NavLink></li>
      </ul>
      <button type="button" className="logout" onClick={onClickLogout} >
            Logout
        </button>
    </header>
  )
}

export default withRouter(Header)
