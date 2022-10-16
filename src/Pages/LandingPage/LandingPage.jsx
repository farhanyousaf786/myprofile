import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './LandingPage.css';
import { useMediaQuery } from 'react-responsive'
import TabBar from '../../Components/Header/Header';
import MyProjects from '../MyProjects/MyProjects';
import {useRef} from 'react';
import React, { useState, useEffect } from "react";





function LandingPage() {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  let hideHeader = "false";
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
     
  };

 
  
  let oldScrollY = 0;

const [direction, setDirection] = useState('up');

const controlDirection = () => {
    if(window.scrollY > oldScrollY) {
        setDirection('down');
    } else {
        setDirection('up');
    }
    oldScrollY = window.scrollY;
}

useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
        window.removeEventListener('scroll', controlDirection);
    };
},[]);

  return (

    
    <div>{direction === "up" ?  isTabletOrMobile && <TabBar/> : null}


    <div className="main">
    {isDesktopOrLaptop && <LeftSide/>}
    {isDesktopOrLaptop && <RightSide

          handleClick={handleClick}
          
          />}
    {isTabletOrMobile && <div className='tab-padding'> <RightSide
    
    handleClick={handleClick}

    /> </div>}
    </div>
    <div ref={ref}><MyProjects/></div>

    </div>

  );
}

export default LandingPage;
