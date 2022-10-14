import React, { useState } from 'react';
import './LandingPage.css';



function LandingPage() {
  
  return (
    <div className="background">

<aside class="profile-card">
  <header>
    <a target="_blank" href="#">
      <img src="http://lorempixel.com/150/150/people/" class="hoverZoomLink"/>
    </a>

    <h1>
            Farhan Yousaf
          </h1>

    <h2>
            Full Stack Developer
          </h2>

  </header>

  <div class="profile-bio">

    <p>
      It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
    </p>

  </div>

  <ul class="profile-social-links">
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i class="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
        <i class="fa fa-behance"></i>
      </a>
    </li>
  </ul>
</aside>
 </div>
  );
}

export default LandingPage;
