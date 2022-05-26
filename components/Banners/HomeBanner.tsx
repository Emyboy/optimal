import React from "react";

type Props = {};

export default function HomeBanner({}: Props) {
    return (
        <section className="section featured-content style1">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-0">
                        <div className="d-flex align-items-stretch justify-content-between w-100 flex-sm-row flex-column">
                            <div className="f-item fl-1 d-flex w-100 align-items-center order-md-1 order-xl-0 order-sm-1 order-lg-0 order-1">
                                <div className="f-image">
                                    <img
                                        className="blur-up lazyloaded"
                                        data-src="assets/images/content/featured-content-img1.jpg"
                                        src="assets/images/content/featured-content-img1.jpg"
                                        alt="image"
                                        title=""
                                    />
                                </div>
                            </div>
                            <div className="f-item fl-1 d-flex w-100 align-items-center blue-bg order-xl-1 order-md-0 order-sm-0 order-lg-1 order-1">
                                <div className="f-text">
                                    <h3 className="body-font mb-3">
                                        New Arrivals Weekly
                                    </h3>
                                    <div className="rte rte-setting d-flex mb-4">
                                        <p>
                                            We release NEW items every single
                                            week! Shop our latest release full
                                            of on-trend and affordable new
                                            styles under $99
                                        </p>
                                    </div>
                                    <a
                                        href="shop-right-sidebar.html"
                                        className="btn btn-small mt20"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-0">
                        <div className="d-flex align-items-stretch justify-content-between w-100 flex-sm-row flex-column">
                            <div className="f-item fl-1 d-flex w-100 align-items-center order-md-1 order-xl-0 order-sm-1 order-lg-0 order-1">
                                <div className="f-image order-2">
                                    <img
                                        className="blur-up lazyloaded"
                                        data-src="assets/images/content/featured-content-img2.jpg"
                                        src="assets/images/content/featured-content-img2.jpg"
                                        alt="image"
                                        title=""
                                    />
                                </div>
                            </div>
                            <div className="f-item fl-1 d-flex w-100 align-items-center pinch-bg order-xl-1 order-md-0 order-sm-0 order-lg-1 order-1">
                                <div className="f-text order-3">
                                    <h3 className="body-font mb-3">
                                        The Finishing Touch
                                    </h3>
                                    <div className="rte rte-setting d-flex mb-4">
                                        <p>
                                            We have the perfect jewelry,
                                            scarves, hats and more at an
                                            affordable price! Take your look to
                                            the next level with our on-trend new
                                            accessories!
                                        </p>
                                    </div>
                                    <a
                                        href="shop-right-sidebar.html"
                                        className="btn btn-small mt20"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
