import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Course from "../../components/Service";
import Campus from "../../components/Campus";
import Facilities from "../../components/Facilities";
import Testimonial from "../../components/Testimonial";
import CallUs from "../../components/CallUs";
export default class index extends Component {
  render() {
    return (
      <>
        <Header />
        {/* --------courses------- */}
        <div className="courses">
          <div className="container">
            <div className="courses-title">
              <h3 className="heading__secondary">Courses we offer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="courses-content">
              <Course />
              <Course />
              <Course />
            </div>
          </div>
        </div>
        {/* ---------campus----------- */}
        <div className="campus">
          <div className="container">
            <div className="campus-title">
              <h3 className="heading__secondary">Our Global campus</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="campus-content">
              <Campus />
              <Campus />
              <Campus />
            </div>
          </div>
        </div>
        {/*  -------------facilities------- */}
        <div className="facilities">
          <div className="container">
            <div className="facilities-title">
              <div className="heading__secondary">Our facilities</div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="facilities-content">
              <Facilities />
              <Facilities />
              <Facilities />
            </div>
          </div>
        </div>
        {/* -----------testimonials-------------- */}
        <div className="testimonials">
          <div className="container">
            <div className="testimonials-title">
              <h3 className="heading__secondary">what our study says</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="testimonials-content">
              <Testimonial />
              <Testimonial />
            </div>
          </div>
        </div>
        {/* -------------call -us------------------- */}
        <div className="call">
          <div className="container">
            <CallUs />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
