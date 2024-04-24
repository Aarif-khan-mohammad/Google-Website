import React from 'react'
import Header from '../Header'
import './index.css'
import Footer from '../Footer'
const softwareOne = [
  {
    "imgUrl": "https://i.ibb.co/jksG4c7/google-lense.png",
    "appName": "Google Lense"
},
{
    "imgUrl": "https://i.ibb.co/wR9bYj1/google-logo.png",
    "appName": "Google"
},
{
    "imgUrl": "https://i.ibb.co/NCKQrz4/google-maps.png",
    "appName": "Google Maps"
},
{
    "imgUrl": "https://i.ibb.co/F6dKrc8/google-meet.png",
    "appName": "Google Meet"
},
{
    "imgUrl": "https://i.ibb.co/BnZv2Nj/google-pay.png",
    "appName": "Google Pay"
},
  {
      "imgUrl": "https://i.ibb.co/0VWktpX/calender.png",
      "appName": "Calender"
  },
  {
      "imgUrl": "https://i.ibb.co/R6JCZhp/chrome-webstore.png",
      "appName": "Chrome"
  },
  {
      "imgUrl": "https://i.ibb.co/Z6fX7pP/chrome.png",
      "appName": "Chrome"
  },
  {
      "imgUrl": "https://i.ibb.co/QdrKKRk/chromium.png",
      "appName": "Chromium"
  },
  {
      "imgUrl": "https://i.ibb.co/kKBWyZF/co-lab.png",
      "appName": "Co-Lab"
  },
  {
      "imgUrl": "https://i.ibb.co/Qbw4kfz/G-Assistance.png",
      "appName": "G-Assistance"
  },
  {
      "imgUrl": "https://i.ibb.co/PwJKSpP/gallery.png",
      "appName": "Gallery"
  },
  {
      "imgUrl": "https://i.ibb.co/R3p3YHG/android.png",
      "appName": "Android"
  },
  {
      "imgUrl": "https://i.ibb.co/yNfPPhb/gmail.png",
      "appName": "Gmail"
  },
  {
      "imgUrl": "https://i.ibb.co/qW4KnKd/Google-Ads.png",
      "appName": "Google Ads"
  },
  {
      "imgUrl": "https://i.ibb.co/b58C74L/Flutter.png",
      "appName": "Flutter"
  }
]

const softwareTwo=[
  {
      "imgUrl": "https://i.ibb.co/dgtXrSC/Google-News.png",
      "appName": "Google News"
  },
  {
    "imgUrl": "https://i.ibb.co/nPJFKyJ/google-books.png",
    "appName": "Google Books"
},
{
    "imgUrl": "https://i.ibb.co/qFnHp2S/google-chat.png",
    "appName": "Google Chat"
},
{
    "imgUrl": "https://i.ibb.co/YtWMSsr/google-cloud.png",
    "appName": "Google Cloud"
},
{
    "imgUrl": "https://i.ibb.co/4mRTj53/google-docs.png",
    "appName": "Google Docs"
},
{
    "imgUrl": "https://i.ibb.co/ZzqPFZn/google-drive.png",
    "appName": "Google Drive"
},
{
    "imgUrl": "https://i.ibb.co/61Vv2ZM/google-duo.png",
    "appName": "Google Duo"
},
{
    "imgUrl": "https://i.ibb.co/QbjRspT/google-fomrs.png",
    "appName": "Google Forms"
},
{
    "imgUrl": "https://i.ibb.co/X3kk8ph/google-home.png",
    "appName": "Google Home"
},
{
    "imgUrl": "https://i.ibb.co/hCMYFXd/google-play-games.png",
    "appName": "Play Games"
},
{
    "imgUrl": "https://i.ibb.co/YPtKB55/google-play.png",
    "appName": "Google Play"
},
{
    "imgUrl": "https://i.ibb.co/7nmkSKW/google-sheets.png",
    "appName": "G - Sheets"
},
{
    "imgUrl": "https://i.ibb.co/fCb1r49/google-snapseed.png",
    "appName": "Snapseed"
},
{
    "imgUrl": "https://i.ibb.co/941HK7V/google-tv.png",
    "appName": "Google-tv"
},
{
    "imgUrl": "https://i.ibb.co/d6dVgzw/google-gemini-icon.webp",
    "appName": "Gemini"
},

{
    "imgUrl": "https://i.ibb.co/2M70cgW/youtube.png",
    "appName": "Youtube"
}
]


const Products = () => {
  return (
    <>
    <Header/>
    <div className='products'>
      <h1 className='banner'>Google Products</h1>
      <p className='intro'>
      Welcome to Google Products, where innovation meets convenience. Our suite of 
      software solutions empowers individuals and businesses to achieve their goals, 
      with tools like Gmail, Google Drive, and Google Analytics. Meanwhile, our physical 
      products bring cutting-edge technology to your fingertips, with smartphones like Google 
      Pixel, wearables like Wear OS smartwatches, and AI-powered smart home devices like Google 
      Nest. Whether you're looking to boost productivity, upgrade your mobile experience, 
      or automate your home, we've got you covered with our range of intuitive and innovative products.
      </p>
      <div className='software'>
        <ul className='products-list left'>
          {softwareOne.map(each => (
            <li className='g-app'>
              <img src={each.imgUrl} alt={each.appName} className='app-img'/>
              <p className='app-name'>{each.appName}</p>
            </li>
          ))}
        </ul>
        <video src='google_software.mp4' autoPlay loop muted className='video-bg'></video>
        <ul className='products-list right'>
          {softwareTwo.map(each => (
            <li className='g-app'>
              <img src={each.imgUrl} alt={each.appName} className='app-img' />
              <p className='app-name'>{each.appName}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='pixel-mobile'>
        <p className='intro-para'>
        Experience the best of Android with Google Pixel mobiles, 
        designed to provide a seamless and intuitive smartphone experience. 
        With a focus on camera excellence, software simplicity, and AI-driven 
        innovation, Google Pixel mobiles have revolutionized the way we capture, 
        communicate, and explore.
        </p>

        <div className='pixel-container'>
          <ul className='key-features left'>
          <span>Key Features:</span><br/>
          <li>Camera Excellence: Capture life's moments with exceptional clarity and precision, 
          thanks to Google Pixel's renowned camera capabilities, featuring advanced software and 
          hardware innovations.</li>
          <li>Timely Software Updates: Enjoy the latest Android updates and security patches as soon 
          as they're available, ensuring your device stays secure and feature-rich.</li>
          <li>AI-Driven Innovation: Experience the power of artificial intelligence with Google 
          Assistant, Google Lens, and other AI-driven features that simplify and enhance your mobile 
          experience.</li>
          <li>Simple, Intuitive Design: Enjoy a clutter-free and intuitive interface that makes it easy to navigate and find what you need.</li>
          </ul>

          <video src='pixel.mp4' autoPlay loop muted className='video-bg'></video>

          <ul className='latest-version right'>
          <span>Latest Pixel Mobile:</span><br/>
          <li>The latest Google Pixel mobile, the Pixel 8 Pro, takes the series to new heights with</li>

          <li>Improved Camera Capabilities: Enhanced zoom, better low-light performance, and advanced
          features like Super Res Zoom and Cinematic Blur.</li>
          <li>Faster Performance: Powered by the latest Google Tensor chip, providing lightning-fast performance and efficient battery life.</li>
          <li>Enhanced Display: A stunning 6.7-inch OLED display with a 120Hz refresh rate, perfect for gaming, streaming, and browsing.</li>
          <li>Long-Lasting Battery: All-day battery life, with fast charging and wireless charging capabilities.</li>
          </ul>
        </div>
        <p className='intro-para'>Experience the best of Android with the Google Pixel 8 Pro, designed to deliver a seamless and innovative smartphone experience.</p>
      </div>
    

      <div className='pixel-mobile'>
        <p className='intro-para'>
        Google Pixel Watch seamlessly integrates the best of Google and Fitbit, 
        empowering you to prioritize health, fitness, and productivity on your wrist. Leverage 
        the power of Fitbit for in-depth health and activity tracking, while remaining 
        connected and on top of your schedule with Google’s intuitive features.
        </p>

        <div className='pixel-container'>
          <ul className='key-features left'>
          <span>Key Features:</span><br/>
          <li>Powered by Fitbit, Pixel Watch meticulously monitors your heart rate, sleep patterns, and activity levels, providing actionable insights to optimize your well-being.</li>
          <li>Google Assistant, integrated right on your wrist, allows for effortless control and information retrieval. Manage your calendar, reply to messages, or utilize Google Pay for contactless transactions – all while on the go.</li>
          <li>The sleek, circular form factor complements any attire, while the comfortable and customizable bands ensure a personalized touch.</li>
          </ul>

          <video src='watch.mp4' autoPlay loop muted className='video-bg'></video>

          <ul className='latest-version right'>
          <span>Pixel Watch 2:</span><br/>
          <li>The all-new multi-path heart-rate sensor and Google AI deliver the most accurate heart-rate monitoring yet.</li>

          <li>Pixel Watch 2 introduces fall detection, adding another layer of peace of mind.</li>
          <li>Enjoy six complimentary months of Fitbit Premium, granting access to personalized coaching, a library of workouts, and mindfulness sessions.</li>
          
          </ul>
        </div>
        <p className='intro-para'>Google Pixel Watch series caters to the modern professional seeking a balance between an active lifestyle and seamless connectivity. With its emphasis on personalized health insights, smart functionality, and sophisticated design, Pixel Watch empowers you to achieve your goals and live life to the fullest.</p>
      </div>
      

      <div className='pixel-mobile'>
        

        <div className='pixel-container'>
          <ul className='key-features left'>
          <span>Key Features:</span><br/>
          <li>Gemini excels at processing and integrating information from various sources, including text, code, and images. This empowers it to deliver nuanced and contextually relevant outputs</li>
          <li>Developers can leverage Gemini for tasks like code generation, translation between programming languages, and debugging assistance.</li>
          <li>Fuel your creativity with Gemini's ability to generate unique and engaging content formats, including music, art, and narratives.</li>
          <li> Gemini can analyze vast amounts of data, uncovering valuable insights and trends to support informed decision-making.</li>
          <li>Gemini's adaptability allows for the creation of bespoke AI applications tailored to specific industry needs.</li>
          </ul>

          <video src='gemini.mp4' autoPlay loop muted className='video-bgg'></video>

          <ul className='latest-version right'>
          <span>What is special about Gemini AI</span><br/>
          <li>Gemini's ability to handle diverse data types fosters a more comprehensive understanding of the world and enables innovative applications.</li>

          <li>Empowering developers with advanced coding functionalities opens doors for automation and enhanced software creation.</li>
          <li>From healthcare to creative industries, Gemini's capabilities hold immense potential for revolutionizing various sectors.</li>
          <li>Offered in multiple versions (Nano, Pro, Ultra), Gemini caters to a range of needs and computational resources.</li>
          
          </ul>
        </div>
        <p className='intro-para'>
          Google's Gemini AI stands out as a revolutionary large language model, pushing the boundaries of artificial intelligence with its versatility and multimodal capabilities.
        </p>
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default Products
