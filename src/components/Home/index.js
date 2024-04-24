import React from 'react'
import Header from '../Header/index.js';
import './index.css'
const bookMarksList = [
  {imgUrl :"https://i.ibb.co/0VWktpX/calender.png" , appName:"Calender"} ,
  {imgUrl :"https://i.ibb.co/R6JCZhp/chrome-webstore.png" , appName:"Web Store"},
  {imgUrl :"https://i.ibb.co/Z6fX7pP/chrome.png", appName:"Chrome"} ,
  {imgUrl :"https://i.ibb.co/QdrKKRk/chromium.png", appName:"Chromium"} ,
  {imgUrl :"https://i.ibb.co/kKBWyZF/co-lab.png", appName:"Co-Lab"} ,
  {imgUrl :"https://i.ibb.co/Qbw4kfz/G-Assistance.png", appName:"Assistant"},
  {imgUrl :"https://i.ibb.co/PwJKSpP/gallery.png", appName:"Gallery"},
  {imgUrl :"https://i.ibb.co/X3kk8ph/google-home.png", appName:"Home"},
  {imgUrl :"https://i.ibb.co/fCb1r49/google-snapseed.png" , appName:"Snapseed"},
  {imgUrl :"https://i.ibb.co/2M70cgW/youtube.png", appName:"Youtube"}
]


const Home = () => {
  return (
    <>
        <Header/>
        <div className='home'>
            <img src='https://i.ibb.co/0KNzpry/googlelogo.png' className='head-img' alt='google'/>
            <div className='search'>
                <script async src="https://cse.google.com/cse.js?cx=44a01ec4c92e74e84">
                </script>
                <div className="gcse-search"></div>
            </div>
            <h2>BookMarks</h2>
            
            <ul className='bookmark-list'>
              {bookMarksList.map(each => (
                <li className='book'>
                  <img src={each.imgUrl} className='bookmarks' alt='bookmark'/>
                  <h4>{each.appName}</h4>
                </li>
              ))}
            </ul>
        </div>
    </>
  )
}

export default Home
