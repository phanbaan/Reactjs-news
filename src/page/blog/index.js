import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../data/data.json";

import ToSlug from "../../slug";

export default class index extends Component {
  renderNewsItem = () => {
    return data.facilities.map((item, index) => {
      return (
        <li className="blog-content__item">
          <div className="blog-content__img-box">
            <img src={item.url} alt={item.title} />
          </div>
          <div className="blog-content__text">
            <h3>{item.title.slice(0, 20) + "..."}</h3>
            <p>
              {item.description.length > 65
                ? item.description.slice(0, 65) + "..."
                : item.description}
            </p>
            <Link
              className="btn-text btn-text--small btn-text--secondary"
              to={"/" + ToSlug(item.title) + "." + item.id + ".html"}
            >
              More
            </Link>
          </div>
        </li>
      );
    });
  };
  renderCategory = () => {
    let categoryObj = data.facilities.reduce((total, current) => {
      if (current.category in total) {
        total[current.category]++;
      } else {
        total[current.category] = 1;
      }
      return total;
    }, {});
    return Object.keys(categoryObj).map((item, index) => {
      return (
        <li className="category__item">
          <Link to="/">{item}</Link>
        </li>
      );
    });
  };

  render() {
    return (
      <>
        <Header className="blog-detail" />
        <div className="blog">
          <div className="container">
            <div className="blog-content">
              <ul className="blog-content__list">{this.renderNewsItem()}</ul>
              <div className="blog-content__siderbar">
                <h3 className="category__title">Category</h3>
                <ul className="category__list">{this.renderCategory()}</ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
