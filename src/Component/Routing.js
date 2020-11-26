import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from "./Listpage";
import Form from "./AddListItms";


export default function Routing() {
    return (
        <div>

            <Switch>
                <Route exact path="/listitems">
                    <Home />
                </Route>
                <Route exact path="/AddItem">
                    <Form />
                </Route>
               
            </Switch>
        </div>
    )
}
