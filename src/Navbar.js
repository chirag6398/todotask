import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
    return (
        <div className="header">
        

            <NavLink to="/"><span className="active_class">Home</span></NavLink>

            <NavLink to="/form"><span className="active_class">AddItem</span></NavLink>

            {/* <NavLink to="/status"><span className="active_class">Status</span></NavLink> */}


    </div>
    );
}
