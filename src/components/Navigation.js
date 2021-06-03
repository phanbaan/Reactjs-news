import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }
  ShowMenu = () => {
    var btn = document.getElementById("menu");
    btn.style.width = "200px";
  };
  HiddenMenu = () => {
    var btn = document.getElementById("menu");
    btn.style.width = 0;
  };
  render() {
    return (
      <nav className="navbar">
        <div className="logo-box">
          <Link to="/">
            <img src="./assets/images/logo.png" alt="" className="logo" />
          </Link>
        </div>

        <div className="menu" id="menu">
          <div className="menu__close" onClick={() => this.HiddenMenu()}>
            <img src="./assets/images/cancel.png" alt="" />
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                about
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/courses" className="nav__link">
                course
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog-detail" className="nav__link">
                blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="menu__icon"
          id="menu__icon"
          onClick={() => this.ShowMenu()}
        >
          <img src="./assets/images/menu.png" alt="" />
        </div>
      </nav>
    );
  }
}
