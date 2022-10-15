import React from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './LandingPage.css';
import { useMediaQuery } from 'react-responsive'
import TabBar from '../../Components/Header/Header';




function LandingPage() {


  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (

    
    <div>{isTabletOrMobile && <TabBar/>}
    <div className="main">
    {isDesktopOrLaptop && <LeftSide/>}
    {isDesktopOrLaptop && <RightSide/>}
    {isTabletOrMobile && <div className='tab-padding'> <RightSide/> </div>}
    </div>
    </div>

  );
}

export default LandingPage;
