import React, { Component } from "react";

export default class Facilities extends Component {
  render() {
    return (
      <a href="#" className="facilities__item">
        <div className="facilities__img">
          <img src={this.props.url} alt="" />
        </div>
        <h3 className="facilities__title">{this.props.title}</h3>
        <p className="text">
          {this.props.description.length > 100
            ? this.props.description.slice(0, 100) + "..."
            : this.props.description}
        </p>
      </a>
    );
  }
}
