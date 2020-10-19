import axios from "axios";
import {db} from "../firebase"

class API {

    async getMessages() {
        try {

        const messagesRef = await db.collection("messages").get()
        // const result = await messagesRef.data()
        // console.log(result)
        return messagesRef;
      } catch (err) {
        console.error(err);
        throw err;
      }
     }
     async postMessages(user_id, messages) {
      try {

      const messagesRef = await db.collection("messages").add({from:"", text:""})
      .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        // .catch(function(error) {
        //     console.error("Error adding document: ", error);
        // });
   
      const result = await messagesRef.data()
      console.log(result)
      return messagesRef;
    } catch (err) {
      console.error(err);
      throw err;
    }
   }

}



 

export default new API();