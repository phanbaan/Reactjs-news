import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default class index extends Component {
  render() {
    return (
      <>
        <Header className="course" />
        <div className="courses">
          <div className="container">
            <div className="courses-title">
              <h3 className="heading__secondary">Courses we offer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="courses-content">
              {/* <Service />
              <Service />
              <Service /> */}
            </div>
          </div>
        </div>
        <div className="facilities">
          <div className="container">
            <div className="facilities-title">
              <div className="heading__secondary">Our facilities</div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="facilities-content">
              {/* <Facilities />
              <Facilities />
              <Facilities /> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
