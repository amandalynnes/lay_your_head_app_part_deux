import React, {useEffect, useState} from "react"
import {Form, Button} from "react-bootstrap"
import api from "../utils/api"
import {db} from "../firebase"




export default function PostMessages (){ 
    const [state, setState] = useState("");
    
    const handlePost= (event) => {
        var shelterRef = db.collection('messages')
        // console.log(shelterRef)
        
        event.preventDefault() 
        console.log(state)
        shelterRef.add({text: state}).then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    }

    const handleChange = (event) => {
        event.preventDefault()
        const inputValue = event.target.value;
        setState(inputValue)
        // console.log(state.text)
      }

    return (
        <React.Fragment>
            <Form onSubmit = {handlePost}> 
            
    {/* <Form.Label>Create a message</Form.Label> */}
    <Form.Control onChange ={handleChange} as="textarea" rows="3" />
    <Button type="submit">Submit</Button>
  </Form>
    
          
        </React.Fragment>
    ) 
}