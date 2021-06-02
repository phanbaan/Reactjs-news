import React, { Component } from "react";

export default class Testimonial extends Component {
  render() {
    return (
      <div className="testimonials__item">
        <div className="testimonials__img">
          <img src="./assets/images/user1.jpg" alt="" />
        </div>
        <div className="testimonial__content">
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            cupiditate ab error praesentium dignissimos veritatis reiciendis
            voluptates aperiam eveniet vero.
          </p>
          <h3 className="testimonials__title">christine berkley</h3>
          <ul className="testimonials__star">
            <li className="testimonials__star-icon">
              <img src="./assets/images/star.png" alt="" />
            </li>
            <li className="testimonials__star-icon">
              <img src="./assets/images/star.png" alt="" />
            </li>
            <li className="testimonials__star-icon">
              <img src="./assets/images/star.png" alt="" />
            </li>
            <li className="testimonials__star-icon">
              <img src="./assets/images/star.png" alt="" />
            </li>
            <li className="testimonials__star-icon">
              <img src="./assets/images/star-black.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
