import React, { Component } from "react";

export default class Service extends Component {
  render() {
    return (
      <div className="courses__item">
        <h3 className="courses__title">{this.props.name}</h3>
        <p className="text">{this.props.short}</p>
      </div>
    );
  }
}
