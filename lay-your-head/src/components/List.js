import React from "react"



export default function List({messages}) {

    if(!messages) return <p>no messages yet...</p>
  return(  
    
    <ul>
    {messages.map(message => (
      
    <li >
      {message}
    </li> 
   
    ) )} 
    </ul>)




}
