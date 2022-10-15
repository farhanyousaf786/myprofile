import React from 'react';
import './Header.css';
import animationData from './fav.json';
import Lottie from "lottie-react";




function TabBar() {

    return(
        <div className='header'>
        <img className="header-img" src="https://imgur.com/enqSQJF.png" alt=""/>

        <a href='https://github.com/farhanyousaf786/switch-app' target="_blank">
        <div className='fav-project'>
        {/* <h1 className='heading' >Favourite</h1>     */}
        <div className='lottie2'>  <Lottie animationData={animationData} loop={true}/></div>
        </div>
        </a>
    
        </div>
    )
}



export default TabBar;
