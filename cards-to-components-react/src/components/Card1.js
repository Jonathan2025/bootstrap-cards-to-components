// 5 add the starter code for Card1.js

import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'

//create the component




const Card1 = () => {
return (
  <div className="card" style={ {width: "18rem"} }>
  <CardImage />

  {/* 11) we are going to pass in a prop title, this will take precedence than over in cardBody */}
  <CardBody title="santorini"/>
</div>
  );
};

//export the component 
export default Card1