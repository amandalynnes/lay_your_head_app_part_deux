import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import firebase from "firebase"
function App() {
  const firebaseApp = firebase.apps[0];
  return (
    // <>
    //   {/* <div className="App">
    //     <h1>Lay Your Head</h1>
    //   </div> */}
    //   <Registration />
    // </>
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;
