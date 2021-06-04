import React, { Component } from "react";
import Navbar from "./Navigation";
import { Link } from "react-router-dom";
class Header extends Component {
  renderTitle = () => {
    if (this.props.className === "home") {
      return (
        <div className="header-content">
          <h1 className="heading__primary">world's biggest university</h1>
          <p className="description__text">
            making website is now on of the easiest thing in the world . You
            just needto learn HTML,CSS,
            <br />
            Javascript and you are good to go
          </p>
          <Link to="/" className="btn-text">
            Visit Us to know more
          </Link>
        </div>
      );
    } else {
      return (
        <div className="header-content">
          <h1 className="heading__secondary">{this.props.className}</h1>
        </div>
      );
    }
  };
  render() {
    let className;
    if (this.props.className !== "home") {
      className = "sub-header";
    }
    return (
      <header id="header" className={className}>
        <div className="container">
          <Navbar />
          {this.renderTitle()}
        </div>
      </header>
    );
  }
}

export default Header;
