import React from 'react';




function Card() {

    return(




<div class="wrapper">
  <h1>Parallax Flipping Cards</h1>
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Diligord</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			
		
		</div>
 </div>



    );



}



export default Card;
