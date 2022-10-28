import React from 'react';
import "./SkillCard.css"


function SkillCard({img, title,}) {


    return(

    <>
   
    <div className='skillCard'>

        <img className='skill-img' src={img}></img>

        <div className='skill-title'>{title}</div>


    </div>
  
    </>
    

    );

}



export default SkillCard;
