import React from "react"



export default function List(props) {

  return(  
    
    <ul>
    {props.state.map(message => (
      
    <li >
      {message.text}
    </li> 
   
    ) )} 
    </ul>)




}