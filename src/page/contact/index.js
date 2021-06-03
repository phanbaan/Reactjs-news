import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Map from "../../components/Map";

export default class index extends Component {
  render() {
    return (
      <>
        <Header className="contact" />
        <Map />
        <div className="contact-us">
          <div className="container">
            <div className="contact-content">
              <div className="contact-content__item">
                <ul className="contact__list">
                  <li className="contact__item">
                    <h3>Thành phố: vũng tàu</h3>
                    <p className="text">khu đổi 2, đường bình dã</p>
                  </li>
                  <li className="contact__item">
                    <h3>+840978999999</h3>
                    <p className="text">Time: monday to saturday ,7AM to 5PM</p>
                  </li>
                  <li className="contact__item">
                    <h3>phanbaan.it@gmail.com</h3>
                    <p className="text">email us your query</p>
                  </li>
                </ul>
              </div>
              <div className="contact-content__item">
                <div className="contact-form">
                  <form action className="form">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your name"
                      required
                    />
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your email"
                      required
                    />
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your subject"
                      required
                    />
                    <textarea
                      className="form__input"
                      rows={10}
                      defaultValue={""}
                    />
                    <button className="btn-text btn-text--secondary">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
