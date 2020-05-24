import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import SnakePage from "./containers/snakePage";
import Page2 from "./containers/page2";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/snake">
        <SnakePage />
      </Route>
      <Route exact path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
}