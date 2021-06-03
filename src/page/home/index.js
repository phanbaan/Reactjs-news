import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Service from "../../components/Service";
import Campus from "../../components/Campus";
import Facilities from "../../components/Facilities";
import Testimonial from "../../components/Testimonial";
import CallUs from "../../components/CallUs";

import data from "../../data/data.json";

export default class index extends Component {
  renderService = () => {
    return data.service.map((item, index) => {
      return <Service key={index} name={item.name} short={item.short} />;
    });
  };
  renderCampus = () => {
    return data.campus.map((item, index) => {
      return <Campus key={index} name={item.name} url={item.url} />;
    });
  };
  renderFacilities = () => {
    return data.facilities.map((item, index) => {
      return (
        <Facilities
          key={index}
          title={item.title}
          url={item.url}
          description={item.description}
        />
      );
    });
  };
  render() {
    return (
      <>
        <Header className="home" />
        {/* --------courses------- */}
        <div className="courses">
          <div className="container">
            <div className="courses-title">
              <h3 className="heading__secondary">Courses we offer</h3>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className="courses-content">{this.renderService()}</div>
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
            <div className="campus-content">{this.renderCampus()}</div>
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
            <div className="facilities-content">{this.renderFacilities()}</div>
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
              <Testimonial
                url="./assets/images/user1.jpg"
                name="christine berkley"
              />
              <Testimonial url="./assets/images/user2.jpg" name="Phan Ba An" />
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
