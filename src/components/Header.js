import React, { Component } from "react";
import Navbar from "./Navigation";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <Navbar />
          <div className="header-content">
            <h1 className="heading__primary">world's biggest university</h1>
            <p className="description__text">
              making website is now on of the easiest thing in the world . You
              just needto learn HTML,CSS,
              <br />
              Javascript and you are good to go
            </p>
            <a href="#" className="btn-text">
              Visit Us to know more
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
