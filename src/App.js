import "./App.css";
import React, { Component } from "react";
import Routers from "./routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Routers />
      </Router>
    );
  }
}

export default App;
