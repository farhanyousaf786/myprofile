import React from 'react';
import "./Card.css"




function Card({title, detail, gitRep, img, platform}) {


    console.log(">>", gitRep);

    return(
    
<body>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img  src={img} alt="img"/>
                    <h3>{title}</h3>
					<h4>Developed In "{platform}"</h4>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>{detail}</p>
                        <a href={gitRep}  target="_blank" rel="noreferrer">Git Repo</a>
                </div>
            </div>
        </div>
      
    </div>
</body>

    );

}



export default Card;
