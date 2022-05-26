import React from "react";

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image"></div>
          <div className="collection-hero__title-wrapper container">
            <h1 className="collection-hero__title">About Us</h1>
            <div className="breadcrumbs text-uppercase mt-1 mt-lg-2">
              <a href="index.html" title="Back to the home page">
                Home
              </a>
              <span>|</span>
              <span className="fw-bold">Who Are We?</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row section">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 mb-md-0">
            <h3>Our Vision</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries remaining essentially unchanged.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h3>Our Mission</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage. All the Lorem Ipsum
              generators on the Internet tend to repeat as necessary.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 clr-f5 about-bnr-text">
        <div className="container section">
          <div className="row g-0 align-items-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 row_text">
              <div className="about-info2 row-text">
                <h3 className="h1 mb-3 fs-26 fw-bold">Who We Are</h3>
                <p>
                  <strong>Everyday fashion is our promise to you</strong>
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, even slightly believable.
                </p>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary.
                </p>
                <a
                  href="blog-single-post.html"
                  className="btn rounded mt-0 mt-lg-3"
                >
                  View our News
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <img
                className="about-info-img blur-up lazyloaded"
                data-src="/assets/images/about/about-info-s3.jpg"
                src="/assets/images/about/about-info-s3.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section about-team">
        <div className="container">
          <div className="section-header col-12">
            <h2 className="text-transform-none">Meet Our Team</h2>
          </div>
          <div className="row team-items mt-4 mt-md-0">
            <div className="team-item col-6 col-sm-4 col-md-4 col-lg-4 text-center mb-4 mb-sm-0">
              <div className="team-img zoom-scal position-relative overflow-hidden">
                <img
                  className="blur-up w-100 lazyloaded"
                  data-src="https://www.freelancermap.com/profileimages/-Ifeora-122400-xxl.jpg"
                  src="https://www.freelancermap.com/profileimages/-Ifeora-122400-xxl.jpg"
                  alt="team"
                />
                <div className="social-url d-flex-wrap flex-column">
                  <a
                    className="px-1"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title=""
                    data-bs-original-title="Facebook"
                    aria-label="Facebook"
                  >
                    <i className="an an-facebook"></i>
                  </a>
                  <a
                    className="px-1"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title=""
                    data-bs-original-title="Twitter"
                    aria-label="Twitter"
                  >
                    <i className="an an-twitter"></i>
                  </a>
                  <a
                    className="px-1"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title=""
                    data-bs-original-title="Instagram"
                    aria-label="Instagram"
                  >
                    <i className="an an-instagram"></i>
                  </a>
                  <a
                    className="px-1"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title=""
                    data-bs-original-title="Linkedin"
                    aria-label="Linkedin"
                  >
                    <i className="an an-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team-bio pt-3">
                <h4>Chukwuemeka S. Ifeora</h4>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
