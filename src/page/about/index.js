import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default class index extends Component {
  render() {
    return (
      <>
        <Header className="about" />
        <div class="about-us">
          <div class="container">
            <div class="about-content">
              <div class="about-content__item">
                <h3 class="heading__secondary">Lorem ipsum dolor sit amet.</h3>
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Harum nulla doloribus, fugiat, corporis quis ipsum excepturi
                  quidem voluptas beatae atque inventore, ex tempora aspernatur
                  sit.
                </p>
                <a href="#" class="btn-text btn-text--secondary">
                  Explore now
                </a>
              </div>
              <div class="about-content__item">
                <img
                  src="./assets/images/about.jpg"
                  alt=""
                  class="about-content__img"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
