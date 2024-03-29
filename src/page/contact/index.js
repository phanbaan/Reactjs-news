import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Map from "../../components/Map";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isOnchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.fname);
  };
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
                  <form
                    action
                    className="form"
                    onSubmit={(event) => this.handleSubmit(event)}
                  >
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your name"
                      required
                      name="fname"
                      onChange={(event) => this.isOnchange(event)}
                    />
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your email"
                      required
                      name="femail"
                      onChange={(event) => this.isOnchange(event)}
                    />
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Enter your subject"
                      required
                      name="fsub"
                      onChange={(event) => this.isOnchange(event)}
                    />
                    <textarea
                      className="form__input"
                      rows={10}
                      placeholder="enter messager"
                      name="fmes"
                      onChange={(event) => this.isOnchange(event)}
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
