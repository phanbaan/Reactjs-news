import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer__title">About us</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              quam
              <br />
              nemo quidem reprehenderit laborum natus, cumque quibusdam
              dignissimos amet debitis.
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="text">
            Copyright © 2020-2021 Freepik Company S.L. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}
