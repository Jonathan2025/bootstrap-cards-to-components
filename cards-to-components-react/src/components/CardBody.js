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

          {/* 22 now we will add in the props.text */}
          <p className="card-text">
           {props.text}
          </p>
          {/* 23 now we also add in props.url to the button */}
          <Button url={props.url}/>
        </div>
    );
  };
  
  //export the component
  export default CardBody
