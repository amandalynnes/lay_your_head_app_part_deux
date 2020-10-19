import React, {  useContext } from 'react';
import {AuthContext} from "../authContext"
import {db} from "../firebase"

class API {

    async getMessages() {
        try {

        const messagesRef = await db.collection("messages").get()
        // const result = await messagesRef.data()
        // console.log(result)
        console.log(messagesRef)
        return messagesRef;
        // return result
      } catch (err) {
        console.error(err);
        throw err;
      }
     }

     
     async createMessage(message) {
       try {
         
         const userInfo = useContext(AuthContext);
        const messageRef = await db.collection("messages").add({
          "from": userInfo,
          "text": message
        })
          
        console.log(messageRef)
        return messageRef;
      } catch (err) {
        console.error(err);
        throw err;
      }
    }

}

export default new API();