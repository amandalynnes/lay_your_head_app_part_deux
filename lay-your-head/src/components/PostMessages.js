import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import API from "../utils/api"
import { Typography } from "antd";
import List from "./List";

const {Paragraph} = Typography



export default function ShelterChat({ shelter }) {
    const [state, setState] = useState("");
    const [messages, setMessages] = useState([])
    const data = []
    const handlePost = (event) => {
        event.preventDefault()
        API.postMessages(`${shelter}`, state)
        setState("")
    }

    const handleChange = (event) => {
        event.preventDefault()
        const inputValue = event.target.value;
        setState(inputValue)
        // console.log(state.text)
    }
    // TODO: Somehow populate an array and then populate over all of the messages.
    const getMessagesArray = async () => {
        API.getMessages()
            .then((querysnapshot) => {
                querysnapshot.forEach((message) => {
                    data.push(message.data().text)
                })
            })
    }
    useEffect(()=> {    
        getMessagesArray()
    }, [data])
    // console.log(data)
    
    return (
        <React.Fragment>
              {/* <Paragraph className="chat">
                <List messages={[data]} />
            </Paragraph> */}
                <Form onSubmit={handlePost}>
                <Form.Control value={state} onChange={handleChange} as="textarea" rows="3" />
                <Button type="submit">Submit</Button>
            </Form>
        </React.Fragment>
    )
}