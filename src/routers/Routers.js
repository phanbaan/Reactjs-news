import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../page/home/index";
import About from "../page/about/index";
import Course from "../page/course/index";
import Blog from "../page/blog/index";
import Contact from "../page/contact/index";
import FacilitiesDetail from "../page/facilities-detail/FacilitiesDetail";

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/courses">
          <Course />
        </Route>
        <Route path="/blog-detail">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/:slug.:id.html" component={FacilitiesDetail}></Route>
      </Switch>
    );
  }
}
