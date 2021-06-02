import React, { Component } from "react";

export default class Campus extends Component {
  render() {
    return (
      <div className="campus__item">
        <div className="campus__img">
          <img src="./assets/images/london.png" alt="" />
        </div>
        <div className="campus__title">
          <h3>London</h3>
        </div>
      </div>
    );
  }
}
