import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './LandingPage.css';
import { useMediaQuery } from 'react-responsive'
import TabBar from '../../Components/Header/Header';
import MyProjects from '../MyProjects/MyProjects';
import {useRef} from 'react';
import React, { useState, useEffect } from "react";
import MyExperties from '../MyExperties/MyExperties';





function LandingPage() {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  let hideHeader = "false";
  const ref = useRef(null);
  const ref2 = useRef(null);



  const handleClick1 = () => {
    ref2.current?.scrollIntoView({behavior: 'smooth'});
     
  };

 
  const handleClick2 = () => {

    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log('handleClick2');

     
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
    {isDesktopOrLaptop && <RightSide handleClick1={handleClick1} handleClick2={handleClick2}/>}
    {isTabletOrMobile && <div className='tab-padding'> <RightSide handleClick1={handleClick1} handleClick2={handleClick2}/> </div>}

    </div>


    <div ref={ref}><MyProjects/></div>

    <div  ref2={ref2}><MyExperties /></div>
    </div>

  );
}

export default LandingPage;
