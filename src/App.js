import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Component/Navbar";
import Routing from "./Component/Routing";
import { BrowserRouter } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./App.css";
import Authen from "./Auth/Authen";
import fire from "./Auth/firebase/fire";

const App = (props) => {
  const [user, setUser] = useState({ u: "khsd" });
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  var authListener = () => {
    console.log(user.u);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser({ user });
      }
    });
  };

  useEffect(() => {
    authListener();
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="vanta" ref={myRef}></div>
        <Routing />
      </BrowserRouter>
    </>
  );
};
export default App;
