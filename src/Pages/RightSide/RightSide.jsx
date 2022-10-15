import Lottie from "lottie-react";
import animationData from './developer.json';
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import './RightSide.css';



function RightSide() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

return (

    
    <div className="right-container">
    <center>
    <div className='lottie1'>  <Lottie animationData={animationData} loop={true}/></div>
    </center>
 
    <center>
    <div className="main-caption">
    <h1><span>Hi! I am Farhan Yousaf. I am full stack software developer.</span></h1>
    <h1><span>Developed in React & Flutter.</span></h1>
    </div>
    </center>



    <div className="main-button">
    <button className="button-0" role="button">GitHub</button>
    <button className="button-0" role="button">My Projects</button>

    </div>

 
    </div>
)

}

export default RightSide;
