import React from "react";

export default function psContainer() {
  return (
    <div>
      <div className="ps-section ps-home-blog pt-80 pb-80">
        <div className="ps-container">
          <div className="ps-section__header mb-50">
            <h2 className="ps-section__title" data-mask="News">
              - Our Story
            </h2>
            <div className="ps-section__action">
              <a className="ps-morelink text-uppercase" href="#">
                View all post<i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="ps-section__content">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div className="ps-post">
                  <div className="ps-post__thumbnail">
                    <a className="ps-post__overlay" href="blog-detail.html"></a>
                    <img src="images/blog/first.jpg" alt="" />
                  </div>
                  <div className="ps-post__content">
                    <a className="ps-post__title" href="#">
                      An Inside Look at the Breaking2 Kit
                    </a>
                    <p className="ps-post__meta">
                      <span>
                        By:
                        <a className="mr-5" href="blog.html">
                          Alena Studio
                        </a>
                      </span>{" "}
                      -<span className="ml-5">Jun 1, 2022</span>
                    </p>
                    <p>
                      To make fast even faster, Nike decided to shake things up
                      and rethink the traditional marathon kit. Designers
                      focused on five key areas that Zersenay Tadese, Lelisa
                      Desisa and Eliud Kipchoge said could be better: weight,
                      fit, comfort, fatigue and grip.…
                    </p>
                    <a className="ps-morelink" href="#">
                      Read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div className="ps-post">
                  <div className="ps-post__thumbnail">
                    <a className="ps-post__overlay" href="blog-detail.html"></a>
                    <img src="images/blog/second.jpg" alt="" />
                  </div>
                  <div className="ps-post__content">
                    <a className="ps-post__title" href="blog-detail.html">
                      Unpacking the Breaking2 Race Strategy
                    </a>
                    <p className="ps-post__meta">
                      <span>
                        By:
                        <a className="mr-5" href="#">
                          Alena Studio
                        </a>
                      </span>{" "}
                      -<span className="ml-5">Jun 1, 2022</span>
                    </p>
                    <p>
                      t’s hard to imagine what life was like when shoes weren’t
                      discovered yet. Everything started because of a real and
                      practical need to protect the feet from outside effects.
                      This seemingly simple human need turned into a quickly
                      growing industry in which design was just as important as
                      functionality.
                    </p>
                    <a className="ps-morelink" href="#">
                      Read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                <div className="ps-post">
                  <div className="ps-post__thumbnail">
                    <a className="ps-post__overlay" href="#"></a>
                    <img src="images/blog/Third.jpg" alt="" />
                  </div>
                  <div className="ps-post__content">
                    <a className="ps-post__title" href="#">
                      Nike’s Latest Football Cleat Breaks the Mold
                    </a>
                    <p className="ps-post__meta">
                      <span>
                        By:
                        <a className="mr-5" href="blog.html">
                          Alena Studio
                        </a>
                      </span>{" "}
                      -<span className="ml-5">Jun 1, 2022</span>
                    </p>
                    <p>
                      {" "}
                      The Nike Force Savage Elite's strength comes in the form
                      of 15 twisting triangular studs that line the outsole.
                      “Triangles are the strongest force in nature,” says
                      Cochrane. Beyond that, testing also proved the shape
                      provides the best 360-degree traction on the field. “Every
                      time a player cuts he has an edge to push off,” she says.
                    </p>
                    <a className="ps-morelink" href="blog-detail.html">
                      Read more<i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
