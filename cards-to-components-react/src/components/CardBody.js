// 4 added in the starter code for CardBody.js
import React from "react"
import Button from "./Button";



// 10 pass in a prop to CardBody
const CardBody = (props) => {

    console.log("this is props", props) // we get an object back
    //12 here we are trying to change the props.title, but the Card1.js santorini take precedence
    // remember props are immutable
    // props.title = "mykonos"


    console.log("props.title", props.title) // santorini

    return (
      <div className="card-body">
        {/* 13 now we will pass in props.title */}
          <h5 className="card-title">{props.title}</h5> 
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button />
        </div>
    );
  };
  
  //export the component
  export default CardBody
