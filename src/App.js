import React from 'react'
import Navbar from "./Component/Navbar"
import Routing from "./Component/Routing";
import { BrowserRouter } from "react-router-dom";
import Img from "./images/1.jpg";
const App = (props) => {

  var responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="ext_div" style={{
          height: "100%",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
        } >
          <div className="cnt_div" style={{
            position: "absolute",
            left: "45%",
            top: "30%",
          }}>
            
          </div>
        </div>
        <img src={Img} alt="..." style={{ width: "100%", height: "100vh" }} />
        <br />
        <br />
        <Routing />
      </BrowserRouter>
    </>
  );
}
export default App;