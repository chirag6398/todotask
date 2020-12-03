import React, { useState, useEffect, useRef } from 'react'
import Navbar from "./Component/Navbar"
import Routing from "./Component/Routing";
import { BrowserRouter } from "react-router-dom";
import BIRDS from 'vanta/dist/vanta.birds.min';
import "./App.css";
const App = (props) => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="vanta" ref={myRef}>

        </div>
        <Routing />
      </BrowserRouter>
    </>
  );
}
export default App;