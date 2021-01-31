import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Component/Navbar";
import Routing from "./Component/Routing";
import { BrowserRouter } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./App.css";
import Authen from "./Auth/Authen";
import { auth } from "./Auth/firebase/fire";

const App = (props) => {
  const [user, setUser] = useState({ u: "" });
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  var authListener = () => {
    console.log(user.u);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({ u: user.email });
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
        <div
          className="vanta"
          ref={myRef}
          style={{ height: "100vh", width: "100vw", opacity: "0.9" }}
        ></div>
        {user.u ? (
          <div>
            <Navbar></Navbar>

            <Routing />
          </div>
        ) : (
          <Authen />
        )}
      </BrowserRouter>
    </>
  );
};
export default App;
