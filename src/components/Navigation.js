import React, { Component } from "react";

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
      <div>
        hello
        <nav className="navbar">
          <div className="logo-box">
            <a href="index.html">
              <img src="./assets/images/logo.png" alt="" className="logo" />
            </a>
          </div>

          <div className="menu" id="menu">
            <div className="menu__close" onClick={() => this.HiddenMenu()}>
              <img src="./assets/images/cancel.png" alt="" />
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">
                  home
                </a>
              </li>
              <li className="nav__item">
                <a href="about.html" className="nav__link">
                  about
                </a>
              </li>
              <li className="nav__item">
                <a href="courses.html" className="nav__link">
                  course
                </a>
              </li>
              <li className="nav__item">
                <a href="blog-detail.html" className="nav__link">
                  blog
                </a>
              </li>
              <li className="nav__item">
                <a href="contact.html" className="nav__link">
                  contact
                </a>
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
      </div>
    );
  }
}
