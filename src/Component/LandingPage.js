import React from 'react';
import Lpimg from "../assets/images/LPimg.jpg";
import LpStyle from "../assets/styles/LandingPage.module.css";


export default function LandingPage() {
    return (
        <div>
        <img src={Lpimg} className={LpStyle.Lpimg} alt="loading...."/>
         <h1 className={LpStyle.heading}> Welcome to todoapp</h1>
        </div>
    )
}
