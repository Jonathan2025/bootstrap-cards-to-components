// 3 added in the starter code for Button.js
import React from 'react'


// 24 now we need to add in the props and then change the url to be props.url
const Button = (props) => {
  return (
    <a href={props.url} className="btn btn-primary">Go somewhere</a>
  )
}

export default Button