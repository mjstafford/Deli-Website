import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import "foundation-sites";
import $ from "jquery";

import "../assets/scss/main.scss"

import LandingPage from "./landingPage/LandingPage"
import NavBar from "./NavBar"
import FoodIndex from "./indexPages/FoodIndex"
import DrinkIndex from "./indexPages/DrinkIndex"
import ItemShowPage from "./showPages/ItemShowPage"

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
        <Route exact path="/open-wide-deli/food" component={FoodIndex} />
        <Route exact path="/open-wide-deli/drinks" component={DrinkIndex} />
        <Route exact path="/open-wide-deli/item/:id" component={ItemShowPage} />
      </Switch>
    </BrowserRouter>
  </div>
  )
};

export default hot(App);
