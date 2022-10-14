import React from 'react';
import './LandingPage.css';
import Lottie from "lottie-react";
import animationData from './developer.json';




function LandingPage() {


  return (


   <div className="main">
   <div className = "left-container" >
   <div className="profile-avatar">
   <img className="profile-img" src="https://imgur.com/ggbj9e9.png" alt=""/>
   </div>
   </div>
  


   <div className="right-container">
   <center>
   <div className='lottie1'>  <Lottie animationData={animationData} loop={true}/></div>
   </center>

   <center>
   <div className="main-caption">
   <h1><span>Hi! I am Farhan Yousaf.</span></h1>
   <h1><span>I am full stack software developer.</span></h1>
   <h1><span>Developed in React & Flutter full.</span></h1>
   </div>
   </center>

   </div>
   </div>

  );
}

export default LandingPage;
