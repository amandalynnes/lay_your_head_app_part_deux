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

}

export default new API();