import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const NotFound = () => {
  return (
    <>
    <Header/>
    <div className='not-found'>
      <div className='upper'>
        <h1 className='not-head'>404</h1>
        <img src="https://i.ibb.co/chNX2PN/disconnected.png" className='disconnect' alt="disconnected" border="0"></img>
        <p className='not-para'>Page Not Found</p>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default NotFound
