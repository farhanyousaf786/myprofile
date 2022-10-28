import React from 'react';
import './Header.css';
import animationData from './fav.json';
import Lottie from "lottie-react";




function TabBar() {

    return(
        
        <div className='header'>
        
        <a className='header-img' href='https://github.com/farhanyousaf786/switch-app' target="_blank" rel="noreferrer">
        <div className='fav-project'>
        <div className='lottie2'>  <Lottie animationData={animationData} loop={true}/></div>
        </div>
        </a>
        


       
        
    
        </div>
    )
}



export default TabBar;
