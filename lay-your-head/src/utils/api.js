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

     async postMessages(shelter, message) {
      try {
        // let shelterRef = db.collection('messages').doc(`${shelter}`).collection("chat")
        let shelterRef = await db.collection('messages')
        shelterRef.add({text: message}).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      return shelterRef;
    } catch (err) {
      console.error(err);
      throw err;
    }
   }

}



 

export default new API();