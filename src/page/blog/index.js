import React, { Component } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default class index extends Component {
  render() {
    return (
      <>
        <Header className="blog-detail" />
        <div className="blog">
          <div className="container">
            <div className="blog-content">
              <div className="blog-content__item">
                <div className="blog-content__img">
                  <img src="./assets/images/certificate.jpg" alt="" />
                </div>
                <div className="blog-content__text">
                  <h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur quo aperiam possimus nobis assumenda sed.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Laboriosam magni, incidunt deleniti quasi voluptates tempora
                    reiciendis doloribus voluptas error eligendi vero porro quia
                    ullam obcaecati, reprehenderit soluta sint et minima.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit quam consequatur earum, doloribus sapiente
                    voluptates dolor, architecto tempore totam modi facilis
                    veniam consectetur quia labore.
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, omnis iusto. Possimus tempore nobis pariatur?
                  </p>
                </div>
                {/* ----------------start comment-------------------------- */}
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
                {/* ----------------end comment-------------------------- */}
              </div>
              <div className="blog-content__siderbar">
                <h3 className="category__title">Category</h3>
                <ul className="category__list">
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                  <li className="category__item">
                    <a href="#">Bussiness analytic</a>
                    <span>12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
