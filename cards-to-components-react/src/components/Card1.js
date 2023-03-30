// 5 add the starter code for Card1.js

import React from 'react'
import CardBody from './CardBody'
import CardImage from './CardImage'

//create the component



// 19 now we need to pass in props
const Card1 = (props) => {
return (
  <div className="card" style={ {width: "18rem"} }>
    {/* 20 now we need to se the props.img */}
  <CardImage img={props.img}/>

  {/* 11) we are going to pass in a prop title, this will take precedence than over in cardBody */}
  {/* 21 now we will add in the props to cardBody */}
  <CardBody title={props.title} text={props.text} url={props.url}/>





</div>
  );
};

//export the component 
export default Card1