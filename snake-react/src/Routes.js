import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import SnakePage from "./containers/snakePage";
import Tetris from "./containers/tetrisPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/snake">
        <SnakePage />
      </Route>
      <Route exact path="/tetris">
        <Tetris />
      </Route>
    </Switch>
  );
}