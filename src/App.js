import React from 'react'
import Navbar from "./Component/Navbar"
import Routing from "./Component/Routing";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {

  var responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
     
        <Routing />
      </BrowserRouter>
    </>
  );
}
export default App;