
import React from 'react';
import SkillCard from '../../Components/Cards/skillCard/SkillCard';
import './MyExperties.css';
import cardsArr from '../../Components/Cards/skillCard/Data';

function MyExperties() {
    const cards = cardsArr.map((data, idx) => {

        return (
          <SkillCard
            key={idx}
            img={data.icon}
            title={data.name}

          />
        );
      });

return (


    <div className="my-Info">

        <center><h1>Having 3+ years of experience in React and Flutter. I focus on developing user friendly applications with responsive user interface. Moreover, I have developed 5 Applications, reached 150k+ Users and 30k+ daily active users. </h1></center> 
        <center><h3 className="skill-title1">Skills & Abilities</h3></center>
        <center><div className='skillGrid'>{cards}</div></center>

    </div>


)

}

export default MyExperties;
