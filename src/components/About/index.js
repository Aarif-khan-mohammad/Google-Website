import React from 'react'
import Header from '../Header'
import './index.css'
import Footer from '../Footer'

const Founders = [
  
  {
      "imgUrl": "https://i.ibb.co/qYZKJ69/Larry-Page-in-the-European-Parliament-17-06-2009-cropped.jpg",
      "name": "Larry Page",
      "description":"Larry Page, alongside Sergey Brin, is credited as the co-founder of Google. Their Stanford dorm room project in 1996, fueled by a desire for a more intelligent search engine, laid the foundation for the tech giant we know today. Larry's vision and innovation have been instrumental in shaping Google's mission to organize the world's information and make it universally accessible and useful."

  },
  {
      "imgUrl": "https://i.ibb.co/thrDVTt/Sergey-Brin-Ted-2010-cropped.jpg",
      "name": "Sergey Brin",
      "description":"Sergey, a visionary computer scientist, co-founded Google in 1998 alongside Larry Page. Their innovative search engine, built on the idea of analyzing website relationships, transformed the way we access information."
  },
  {
    "imgUrl": "https://i.ibb.co/NsjTxFc/Eric-Schmidt-at-the-37th-G8-Summit-in-Deauville-037.jpg",
    "name": "Eric Schmidt",
    "description":"Eric Schmidt served as a key figure in Google's rise to prominence. Taking the helm as CEO in 2001, he leveraged his business acumen to shepherd the young search engine into a global tech leader."
  },
  {
      "imgUrl": "https://i.ibb.co/HVZQ5Jr/Sundar-Pichai-2023-cropped.jpg",
      "name": "Sundar Pichai",
      "description":"Sundar Pichai, the current CEO of Google and Alphabet, has been instrumental in shaping the company's most popular products. From spearheading the development of Chrome and ChromeOS to overseeing the growth of Gmail and Maps, Pichai's vision and leadership have played a pivotal role in Google's evolution."
  }
]


const Companies = [
  {
      "imgUrl": "https://i.ibb.co/GtnS0dZ/Double-Click-Logo.png",
      "company": "Double Click",
      "description": "Google owns DoubleClick, acquired in 2007 to become a major force in online advertising. DoubleClick's ad serving and management tools (like DFP) are integrated into Google's advertising platform. Their current vision, as part of Google, is to empower advertisers with targeted campaigns and publishers with effective ad space selling."
  },
  {
      "imgUrl": "https://i.ibb.co/55zBjR5/fitbit-and-wear-os.jpg",
      "company": "Fitbit",
      "description": "Google's 2021 acquisition of Fitbit ($2.1 billion) bolstered their wearables presence. Fitbit's strength lies in sensor tech & user health data (privacy protected). Their vision: inspire healthier lives through wearables and community."
  },
  {
      "imgUrl": "https://i.ibb.co/373NpCK/Google-Nest-Pro-Logo.jpg",
      "company": "Google Nest",
      "description": "Google Nest is Google's line of smart home products allowing users to control their home with voice commands or a mobile app. These include smart speakers, displays, thermostats, security systems, and more. Nest products work together to create a customizable connected home ecosystem. Google Assistant integration enables control through voice commands."
  },
  {
      "imgUrl": "https://i.ibb.co/sWMFy5h/Looker-6f803d7fdc.png",
      "company": "Looker",
      "description": "Looker, now a part of Google Cloud, is a business intelligence platform. It empowers users to explore data, create dashboards, and build data-driven applications. Looker integrates with various data sources and offers features for data modeling and security. Their vision aligns with Google Cloud: to make data accessible and useful for businesses, driving informed decisions."
  },
  {
      "imgUrl": "https://i.ibb.co/KKv2Ztx/mandiant-google-banner.jpg",
      "company": "Mandiant",
      "description": "Google acquired cybersecurity firm Mandiant in 2022 for $5.4 billion. Mandiant specializes in threat intelligence, incident response, and security consulting. Their expertise strengthens Google Cloud's security offerings, aiming to provide comprehensive protection for businesses across cloud and on-premise environments.Their vision likely aligns with Google Cloud's: to make the digital world safer and more secure."
  },
  {
      "imgUrl": "https://i.ibb.co/RbPKfhC/waze-mobile-logo-vector.png",
      "company": "Waze",
      "description": "Waze, owned by Google since 2013, is a community-driven navigation app. It uses real-time traffic info from users (like accidents, jams, police) to suggest the fastest route. This driver network makes Waze unique, offering up-to-date navigation and saving users time. Their focus is on a collaborative driving experience, with the motto (unofficial) being Be prepared, drive with Waze"
  },
  {
      "imgUrl": "https://i.ibb.co/JK6gn1t/youtube.jpg",
      "company": "Youtube",
      "description": "YouTube, a subsidiary of Google since 2006, is a video-sharing platform where users can upload, watch, and share videos. Its mission is to give everyone a voice and show them the world, empowering creators and fostering global connection. There's no official motto, but their focus on empowering creators and viewers aligns with the idea of sharing the world through video."
  },
  {
      "imgUrl": "https://i.ibb.co/9WcM7SY/Android-14.jpg",
      "company": "Android",
      "description": "Android isn't a separate company, but an open-source operating system that breathes life into countless smartphones and tablets. Developed by Google in 2007, Android's philosophy revolves around openness and accessibility. Let's delve deeper into its origins, vision, and unofficial motto."
  },
  {
      "imgUrl": "https://i.ibb.co/105nWLq/Deep-Mind.jpg",
      "company": "Deep Mind",
      "description": "DeepMind, now part of Google AI, is a research lab focused on artificial intelligence (AI). Their vision is ambitious: unlocking the potential of AI to solve some of the world's toughest challenges. They aim to develop safe and beneficial AI systems that can advance science, transform industries, and improve lives. DeepMind doesn't have an official motto, but their work reflects a commitment to responsible and impactful AI development."
  }
]



const About = () => {
  return (
    <>
      <Header/>
      <div className='about'>
      <h1 className='head'>How <span className='google-span'>Google</span> Is Started</h1>
        <div className='how-we-start'>
          
          <p className='into-para'>Google's story began in 1996, not in a fancy lab, but in a 
            Stanford dorm room. Larry Page and Sergey Brin, two PhD students, 
            envisioned a search engine that analyzed the web's "backrubs" - 
            links between websites - to understand a page's importance. BackRub 
            soon evolved into Google, named after the mathematical term "googol" 
            (A 1 followed by 100 zeros) reflecting their ambitious goal: to organize 
            the world's information. With a $100,000 check from a visionary investor, 
            Google Inc. was born in 1998, and the rest, as they say, is internet history.</p>
            <img src='https://i.ibb.co/3rgDfbz/Whats-App-Image-2024-04-23-at-3-05-10-PM.jpg' className='intro-img'alt='google'/>
        </div>
        <div className='vision-container'>
          <h1 className='vision-head'>
            Our <span className='google-span'>Vision</span>
          </h1>
          <p className='vision'>Google's vision is to be the world's information powerhouse, democratizing knowledge and empowering everyone with the ability to access and leverage information easily. They strive to make information not just obtainable, but seamlessly integrated into your life, available at your fingertips whenever you need it.</p>
        </div>
        
        <h1 className='found-head'>Founders and <span className='google-span'>CEO</span>'s</h1>
        <ul className='founders-container'>
          
          {Founders.map(each => (
            <li className='founder'>
              <img src={each.imgUrl} className={`found-img ${each.name}`} alt="founder"/>
              <div className='found-text'>
                <h2 className='found-name'>{each.name}</h2>
                <p className='found-des'>{each.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className='companies'>
          <h1 className='company-head'><span className='google-span'>Google</span>'s Top Owned Companies</h1>
          <ul className='company-list'>
            {Companies.map(each=>(
              <li className='company'>
                <div className='company-text'>
                  <h3 className='company-name'>{each.company}</h3>
                  <p className='company-des'>{each.description}</p>
                </div>
                <img src={each.imgUrl} className='company-img' alt="company-logo"/>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
