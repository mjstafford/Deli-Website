import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "foundation-sites";
import $ from "jquery";

import "../assets/scss/main.scss"

import LandingPage from "./LandingPage"
import NavBar from "./NavBar"

const App = (props) => {
  useEffect(() => {
    $(document).foundation();
  }, []);

  return (
  <div>
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path="/" >
          <Redirect to="/open-wide-deli" />
        </Route>
        <Route exact path="/open-wide-deli" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default hot(App);
