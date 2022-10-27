
import React from 'react';
import Cards from '../../Components/Cards/ProjectCard/projectCard';
// import { useMediaQuery } from 'react-responsive'
import './MyProjects.css';
import cardsArr from '../../Components/Cards/ProjectCard/Data';





function MyProjects({}) {

    const cards = cardsArr.map((data, idx) => {

        return (
          <Cards
            key={idx}
            title={data.title}
            detail={data.detail}
            gitRep={data.gitRepo}
            img={data.img}
            platform={data.platform}

          />
        );
      });



    return(

         <>
           <h1 className='project-title'>MY PROJECTS</h1>
        <center> <div className='cards-data'>{cards}</div></center>
         </>

    );



}



export default MyProjects;
