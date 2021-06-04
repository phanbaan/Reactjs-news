import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CallUs extends Component {
  render() {
    return (
      <div className="call-title">
        <h2>
          Enroll for our various online course <br />
          anywhere from the world
        </h2>
        <Link to="/" className="btn-text">
          contact us
        </Link>
      </div>
    );
  }
}
