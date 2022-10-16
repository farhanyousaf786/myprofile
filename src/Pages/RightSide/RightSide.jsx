import Lottie from "lottie-react";
import animationData from './developer.json';
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import './RightSide.css';



function RightSide({handleClick}) {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

return (

    
    <div className="right-container">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>

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
    <a  href="https://github.com/farhanyousaf786/" target="_blank"><button className="button-0" role="button">GitHub</button></a>
    <button onClick={handleClick} className="button-0" role="button">My Projects</button>
    </div>



    <div class="rounded-social-buttons">
        <a class="social-button linkedin" href="https://www.linkedin.com/in/mfarhanyousaf/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a class="social-button facebook" href="https://www.facebook.com/Farhanyousaf1996/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a class="social-button twitter" href="https://twitter.com/LaaSyLahoo" target="_blank"><i class="fab fa-twitter"></i></a>
        {/* <a class="social-button youtube" href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>
        <a class="social-button instagram" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a> */}

    </div>




    </div>
)

}

export default RightSide;
