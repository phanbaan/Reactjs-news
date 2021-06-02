import React, { Component } from "react";

export default class Facilities extends Component {
  render() {
    return (
      <a href="#" className="facilities__item">
        <div className="facilities__img">
          <img src="./assets/images/library.png" alt="" />
        </div>
        <h3 className="facilities__title">world class library</h3>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut quae
          at quia porro voluptate?
        </p>
      </a>
    );
  }
}
