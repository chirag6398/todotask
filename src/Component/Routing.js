import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Listpage";
import Form from "./AddListItms";
import LandingPage from "./LandingPage";

export default function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/listitems">
          <Home />
        </Route>
        <Route exact path="/AddItem">
          <Form />
        </Route>
      </Switch>
    </div>
  );
}
