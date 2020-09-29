import React from 'react'
import Navbar from "./Navbar"

import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom"
const  App=(props)=> {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <BrowserRouter>
        <Navbar></Navbar>
        <br/>
        <br/>
        <Routing />
      </BrowserRouter>
    </div>
  );
}
export default App;