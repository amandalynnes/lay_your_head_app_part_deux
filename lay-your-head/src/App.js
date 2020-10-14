import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import "./HomePage.css";
import HomePage from "./pages/HomePage";
function App() {
  return (
    // <>
    //   {/* <div className="App">
    //     <h1>Lay Your Head</h1>
    //   </div> */}
    //   <Registration />
    // </>
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
