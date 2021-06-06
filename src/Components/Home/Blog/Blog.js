import React from "react";
import "./Blog.css";
import Head from "./../Head/Head";
const Blog = (props) => {
  return (
    <div className="blog background-grey-1 padding-tb-100px">
      <div className="container">
        <Head
          title="Our Blog"
          parg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          colorHeader={props.colorHeader}
        />
        <div
          className="news flex-row wow animate__backInUp"
          data-wow-delay=".3s"
          data-wow-duration="1s"
        >
          <div className="news-box hover transition-transform flex-row background-light shadow">
            <img src="image/Home/Blog/blog-1.jpg" />
            <div className="news-right">
              <div className="folder text-main-color">
                <i className="fa fa-folder-open-o"></i>
                <span className="hover-red transition cursor">News</span>,
                <span className="hover-red transition cursor">Article</span>
              </div>
              <h3 className="margin-tb-15px transition">
                Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
              </h3>
              <div className="user">
                <small>
                  <i className="fa fa-user-o"></i>
                  <span>By : </span>
                  <span className="hover-red transition cursor">
                    Rabie Elkheir
                  </span>
                </small>
              </div>
            </div>
          </div>

          <div
            className="news-box wow animate__backInUp hover transition-transform flex-row background-light shadow"
            data-wow-delay=".5s"
            data-wow-duration="1s"
          >
            <img src="image/Home/Blog/blog-2.jpg" />
            <div className="news-right">
              <div className="folder text-main-color">
                <i className="fa fa-folder-open-o"></i>
                <span className="hover-red transition cursor">News</span>,
                <span className="hover-red transition cursor">Article</span>
              </div>
              <h3 className="margin-tb-15px transition">
                Long Don’t Spend Time Beating On A Wall, Hoping To Trans ...
              </h3>
              <div className="user">
                <small>
                  <i className="fa fa-user-o"></i>
                  <span>By : </span>
                  <span className="hover-red transition cursor">
                    Rabie Elkheir
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
