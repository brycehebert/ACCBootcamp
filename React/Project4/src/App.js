import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import Home from "./components/Home";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
//CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/catering">
            <Catering />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
