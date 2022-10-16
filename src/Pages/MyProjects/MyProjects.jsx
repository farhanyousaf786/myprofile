
import React from 'react';
import Cards from '../../Components/Card/Card';
// import { useMediaQuery } from 'react-responsive'
import './MyProjects.css';
import cardsArr from '../../Components/Card/Data';





function MyProjects({}) {

    const cards = cardsArr.map((data, idx) => {

        return (
          <Cards
            key={idx}
            title={data.title}
            detail={data.detail}
            gitRep={data.gitRep}
            img={data.img}
            platform={data.platform}

          />
        );
      });



    return(

         <>
           <h1 className='project-title'>MY PROJECTS</h1>
         <div className='cards-data'>{cards}</div>
         </>

    );



}



export default MyProjects;
