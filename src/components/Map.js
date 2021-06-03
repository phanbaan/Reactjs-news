import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div className="location">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.4612657700086!2d107.1069775141136!3d10.384890969139693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317571d0eee42969%3A0x9c6e725e8e4d05d7!2zQ2jDrSBMaW5o!5e0!3m2!1svi!2s!4v1622560464417!5m2!1svi!2s"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}
