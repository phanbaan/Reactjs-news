import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../data/data.json";
import ToSlug from "../../slug";
class FacilitiesDetail extends Component {
  renderDetail = () => {
    return data.facilities
      .filter((item) => item.id === parseInt(this.props.match.params.id))
      .map((item, index) => {
        return (
          <div className="facilities-detail__text" key={index}>
            <div>
              <img src={item.url} alt={item.title} />
            </div>
            <h3 className="heading__secondary">{item.title}</h3>
            <p className="text">{item.description}</p>
            <div className="comment">
              <h3 className="comment__title">Leave a comment</h3>
              <form action className="comment-form">
                <input
                  type="text"
                  className="comment-form__input"
                  placeholder="Enter name"
                />
                <input
                  type="text"
                  className="comment-form__input"
                  placeholder="Enter Email"
                />
                <textarea
                  rows={5}
                  placeholder="Your comment"
                  className="comment-form__input"
                  defaultValue={""}
                />
                <button className="btn-text btn-text--secondary">
                  Post comment
                </button>
              </form>
            </div>
          </div>
        );
      });
  };
  renderSidebar = () => {
    return data.facilities
      .filter(
        (item, index) =>
          item.id !== parseInt(this.props.match.params.id) && index < 8
      )
      .map((item, index) => {
        return (
          <li key={index}>
            <Link
              className="facilities-detail__link"
              to={"/" + ToSlug(item.title) + "." + item.id + ".html"}
            >
              <div className="facilities-detail__image">
                <img src={item.url} alt={item.title} />
              </div>
              <div className="facilities-detail__box">
                <h4>{item.title}</h4>
                <p className="text">
                  {item.description.length > 40
                    ? item.description.slice(0, 39) + "..."
                    : item.description}
                </p>
              </div>
            </Link>
          </li>
        );
      });
  };
  render() {
    return (
      <>
        <Header className={this.props.match.params.slug.replace(/-/g, " ")} />
        <div className="facilities-detail">
          <div className="container facilities-detail__content">
            {this.renderDetail()}
            <div className="facilities-detail__sidebar">
              <h3>News</h3>
              <ul>{this.renderSidebar()}</ul>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default FacilitiesDetail;
