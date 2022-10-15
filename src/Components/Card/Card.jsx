import React from 'react';




function Card() {

    return(


<div class="wrapper">
  <h1>Projects </h1>
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Switch APP</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Info will be here..</p>
						</div>
					</div>
				</div>
			</div>
			
		
		</div>
 </div>



    );



}



export default Card;
