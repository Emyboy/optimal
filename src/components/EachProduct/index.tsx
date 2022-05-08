import React from "react";

type Props = {};

export function EachProduct({}: Props) {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 item">
            <div className="product-image">
                <a href="product-layout1.html" className="product-img">
                    <img
                        className="primary blur-up lazyloaded"
                        data-src="assets/images/products/product-1.jpg"
                        src="assets/images/products/product-1.jpg"
                        alt="image"
                        title=""
                    />
                    <img
                        className="hover blur-up lazyloaded"
                        data-src="assets/images/products/product-1-1.jpg"
                        src="assets/images/products/product-1-1.jpg"
                        alt="image"
                        title=""
                    />
                </a>

                <div className="saleTime" data-countdown="2024/10/01">
                    <span className="ht-count days">
                        <span className="count-inner">
                            <span className="time-count">877</span>{" "}
                            <span>Days</span>
                        </span>
                    </span>{" "}
                    <span className="ht-count hour">
                        <span className="count-inner">
                            <span className="time-count">19</span>{" "}
                            <span>HR</span>
                        </span>
                    </span>{" "}
                    <span className="ht-count minutes">
                        <span className="count-inner">
                            <span className="time-count">37</span>{" "}
                            <span>Min</span>
                        </span>
                    </span>{" "}
                    <span className="ht-count second">
                        <span className="count-inner">
                            <span className="time-count">52</span>{" "}
                            <span>Sc</span>
                        </span>
                    </span>
                </div>

                <div className="button-set style0 d-none d-md-block">
                    <ul>
                        <li>
                            <a
                                className="btn-icon btn cartIcon pro-addtocart-popup"
                                href="#pro-addtocart-popup"
                            >
                                <i className="icon an an-cart-l"></i>{" "}
                                <span className="tooltip-label top">
                                    Add to Cart
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-icon quick-view-popup quick-view"
                                data-toggle="modal"
                                data-target="#content_quickview"
                            >
                                <i className="icon an an-search-l"></i>{" "}
                                <span className="tooltip-label top">
                                    Quick View
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-icon wishlist add-to-wishlist"
                                href="my-wishlist.html"
                            >
                                <i className="icon an an-heart-l"></i>{" "}
                                <span className="tooltip-label top">
                                    Add To Wishlist
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="btn-icon compare add-to-compare"
                                href="compare-style2.html"
                            >
                                <i className="icon an an-sync-ar"></i>{" "}
                                <span className="tooltip-label top">
                                    Add to Compare
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-details text-center">
                <div className="product-name text-uppercase">
                    <a href="product-layout1.html">Floral Crop Top</a>
                </div>
                <div className="product-price">
                    <span className="old-price">$199.00</span>
                    <span className="price">$219.00</span>
                </div>
                <div className="product-review d-flex align-items-center justify-content-center">
                    <i className="an an-star"></i>
                    <i className="an an-star"></i>
                    <i className="an an-star"></i>
                    <i className="an an-star"></i>
                    <i className="an an-star-o"></i>
                    <span className="caption hidden ms-2">3 reviews</span>
                </div>
                <p className="hidden sort-desc">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s specimen book...
                </p>
                <ul className="image-swatches swatches">
                    <li className="radius blue medium">
                        <span className="swacth-btn"></span>
                        <span className="tooltip-label">Blue</span>
                    </li>
                    <li className="radius pink medium">
                        <span className="swacth-btn"></span>
                        <span className="tooltip-label">Pink</span>
                    </li>
                    <li className="radius red medium">
                        <span className="swacth-btn"></span>
                        <span className="tooltip-label">Red</span>
                    </li>
                    <li className="radius yellow medium">
                        <span className="swacth-btn"></span>
                        <span className="tooltip-label">Yellow</span>
                    </li>
                </ul>
                <div className="button-action d-flex">
                    <div className="addtocart-btn">
                        <form className="addtocart" action="#" method="post">
                            <a
                                className="btn pro-addtocart-popup"
                                href="#pro-addtocart-popup"
                            >
                                <i className="icon hidden an an-cart-l"></i>Add
                                To Cart
                            </a>
                        </form>
                    </div>
                    <div className="quickview-btn">
                        <a
                            className="btn btn-icon quick-view quick-view-popup"
                            data-toggle="modal"
                            data-target="#content_quickview"
                        >
                            <i className="icon an an-search-l"></i>{" "}
                            <span className="tooltip-label top">
                                Quick View
                            </span>
                        </a>
                    </div>
                    <div className="wishlist-btn">
                        <a
                            className="btn btn-icon wishlist add-to-wishlist"
                            href="my-wishlist.html"
                        >
                            <i className="icon an an-heart-l"></i>{" "}
                            <span className="tooltip-label top">
                                Add To Wishlist
                            </span>
                        </a>
                    </div>
                    <div className="compare-btn">
                        <a
                            className="btn btn-icon compare add-to-compare"
                            href="compare.html"
                        >
                            <i className="icon an an-sync-ar"></i>{" "}
                            <span className="tooltip-label top">
                                Add to Compare
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
