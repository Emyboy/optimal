import React from "react";

type Props = {};

export default function WhyUs({}: Props) {
    return (
        <div className="section about-service product-service pb-0">
            <div className="container">
                <div className="section-header col-12">
                    <h2 className="text-transform-none">Why Optimal?</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center mb-4 mb-md-0">
                        <div className="service-info">
                            <i className="icon an an-desktop mb-3"></i>
                            <div className="text">
                                <h4>Design Quality</h4>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for
                                    interested.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center mb-4 mb-md-0">
                        <div className="service-info">
                            <i className="icon an an-mobile-alt mb-3"></i>
                            <div className="text">
                                <h4>Mobile First Design</h4>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for
                                    interested.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 text-center mb-0 mb-md-0">
                        <div className="service-info">
                            <i className="icon an an-sort-amount-up mb-3"></i>
                            <div className="text">
                                <h4>High Speed &amp; Performance</h4>
                                <p>
                                    The standard chunk of Lorem Ipsum used since
                                    the 1500s is reproduced below for
                                    interested.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
