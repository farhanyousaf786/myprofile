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
  const [direction, setDirection] = useState('up');


  const ref = useRef([]);



  const handleClick1 = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
     
  };

 
  // const handleClick2 = () => {

  //   console.log('will show popup menu here..');

     
  // };

  const handleClick3 = () => {
    const section = document.querySelector( '#myInfo' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  
  let oldScrollY = 0;


  const controlDirection = () => {
    if(window.scrollY > oldScrollY) {
        setDirection('down');
    } else {
      
      if(window.pageYOffset === 0) {
        setDirection('up');
      }
    }
    oldScrollY = window.scrollY;
}

     useEffect(() => {
     
      window.addEventListener('scroll', controlDirection);
      return () => {
      window.removeEventListener('scroll', controlDirection);
        };
      
    },[controlDirection]);

  return (

    <div>{direction === "up" ?  isTabletOrMobile && <TabBar/> : null}
    <div className="main">
    {isDesktopOrLaptop && <LeftSide/>}
    {isDesktopOrLaptop && <RightSide handleClick1={handleClick1} handleClick2={handleClick3}/>}
    {isTabletOrMobile && <div className='tab-padding'> <RightSide handleClick1={handleClick1} handleClick2={handleClick3}/> </div>}
    </div>
    <div id='myInfo'><MyExperties /></div>

    <div ref={ref}><MyProjects/></div>
    </div>
  );
}

export default LandingPage;
