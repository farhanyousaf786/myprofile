import React from "react";
import './LandingPage.css';
// import { useEffect } from 'react';


function LandingPage() {
  
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = "./LandingPage.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  // return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);
  
  return (
    <div className="background">
    <h1>This is my info page </h1>
    </div>
  );
}

export default LandingPage;
