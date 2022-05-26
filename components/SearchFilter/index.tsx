import React from "react";

type Props = {};

export default function SearchFilter({}: Props) {
    return (
        <div>
            <div className="sidebar_tags">
                <div className="sidebar_widget filterBox filter-widget">
                    <div className="widget-title">
                        <h2 className="mb-0">Price</h2>
                    </div>
                    <form
                        action="#"
                        method="post"
                        className="price-filter filterDD"
                    >
                        <div
                            id="slider-range"
                            className="mt-2 ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        >
                            <div
                                className="ui-slider-range ui-widget-header ui-corner-all"
                                style={{ left: "0%", width: "46.8085%" }}
                            ></div>
                            <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                style={{ left: "0%" }}
                            ></span>
                            <span
                                className="ui-slider-handle ui-state-default ui-corner-all"
                                style={{ left: "46.8085%" }}
                            ></span>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p className="no-margin">
                                    <input id="amount" type="text" />
                                </p>
                            </div>
                            <div className="col-6 text-right margin-25px-top">
                                <button className="btn btn--small rounded">
                                    filter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="sidebar_widget filterBox filter-widget">
                    <div className="widget-title">
                        <h2 className="mb-0">Color</h2>
                    </div>
                    <div className="filter-color swacth-list filterDD clearfix">
                        <ul className="clearfix">
                            <li>
                                <span className="swacth-btn medium radius black"></span>
                                <span className="tooltip-label">Black</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius white"></span>
                                <span className="tooltip-label">White</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius red"></span>
                                <span className="tooltip-label">Red</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius blue"></span>
                                <span className="tooltip-label">Blue</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius pink"></span>
                                <span className="tooltip-label">Pink</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius gray"></span>
                                <span className="tooltip-label">Gray</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius green"></span>
                                <span className="tooltip-label">Green</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius orange"></span>
                                <span className="tooltip-label">Orange</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius yellow"></span>
                                <span className="tooltip-label">Yellow</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius blueviolet"></span>
                                <span className="tooltip-label">
                                    Blue Violet
                                </span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius brown"></span>
                                <span className="tooltip-label">Brown</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius darkGoldenRod"></span>
                                <span className="tooltip-label">
                                    Dark Golden Red
                                </span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius darkGreen"></span>
                                <span className="tooltip-label">
                                    Dark Green
                                </span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius darkRed"></span>
                                <span className="tooltip-label">Dark Red</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius khaki"></span>
                                <span className="tooltip-label">Khaki</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius blue-red"></span>
                                <span className="tooltip-label">Blue/Red</span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius black-grey"></span>
                                <span className="tooltip-label">
                                    Black/Grey
                                </span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius pink-black"></span>
                                <span className="tooltip-label">
                                    pink-Black
                                </span>
                            </li>
                            <li>
                                <span className="swacth-btn medium radius yellow-black"></span>
                                <span className="tooltip-label">Yellow</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widget filterBox filter-widget size-swacthes">
                    <div className="widget-title">
                        <h2 className="mb-0">Size</h2>
                    </div>
                    <div className="filterDD">
                        <ul className="clearfix">
                            <li>
                                <input type="checkbox" value="s" id="s" />
                                <label htmlFor="s">
                                    <span></span>S
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="m" id="m" />
                                <label htmlFor="m">
                                    <span></span>M
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="l" id="l" />
                                <label htmlFor="l">
                                    <span></span>L
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="x" id="x" />
                                <label htmlFor="x">
                                    <span></span>X
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="xl" id="xl" />
                                <label htmlFor="xl">
                                    <span></span>XL
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="xll" id="xll" />
                                <label htmlFor="xll">
                                    <span></span>XLL
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="xxl" id="xxl" />
                                <label htmlFor="xxl">
                                    <span></span>XXL
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="xs" id="xs" />
                                <label htmlFor="xs">
                                    <span></span>XS
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="15" id="15" />
                                <label htmlFor="15">
                                    <span></span>15
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="25" id="25" />
                                <label htmlFor="25">
                                    <span></span>25
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="35" id="35" />
                                <label htmlFor="35">
                                    <span></span>35
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="45" id="45" />
                                <label htmlFor="45">
                                    <span></span>45
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="55" id="55" />
                                <label htmlFor="55">
                                    <span></span>55
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widget filterBox filter-widget size-swacthes product-type">
                    <div className="widget-title">
                        <h2 className="mb-0">Product type</h2>
                    </div>
                    <div className="filterDD">
                        <ul className="clearfix">
                            <li>
                                <input
                                    type="checkbox"
                                    value="accessories"
                                    id="accessories"
                                />
                                <label htmlFor="accessories">
                                    <span></span>Accessories{" "}
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="bags" id="bags" />
                                <label htmlFor="bags">
                                    <span></span>Bags
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="jeans"
                                    id="jeans"
                                />
                                <label htmlFor="jeans">
                                    <span></span>Jeans
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="shoes"
                                    id="shoes"
                                />
                                <label htmlFor="shoes">
                                    <span></span>Shoes
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="t-shirts"
                                    id="t-shirts"
                                />
                                <label htmlFor="t-shirts">
                                    <span></span>T-shirts
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widget filterBox filter-widget size-swacthes brand-filter">
                    <div className="widget-title">
                        <h2 className="mb-0">Brands</h2>
                    </div>
                    <div className="filterDD">
                        <ul className="clearfix">
                            <li>
                                <input
                                    type="checkbox"
                                    value="adidas"
                                    id="adidas"
                                />
                                <label htmlFor="adidas">
                                    <span></span>Adidas
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="baggit"
                                    id="baggit"
                                />
                                <label htmlFor="baggit">
                                    <span></span>Baggit
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="campus"
                                    id="campus"
                                />
                                <label htmlFor="campus">
                                    <span></span>Campus
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="caprese"
                                    id="caprese"
                                />
                                <label htmlFor="caprese">
                                    <span></span>Caprese
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="elle" id="elle" />
                                <label htmlFor="elle">
                                    <span></span>Elle
                                </label>
                            </li>
                            <li>
                                <input type="checkbox" value="diva" id="diva" />
                                <label htmlFor="diva">
                                    <span></span>Diva
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="optimal"
                                    id="optimal"
                                />
                                <label htmlFor="optimal">
                                    <span></span>Optimal
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widget filterBox filter-widget size-swacthes availability">
                    <div className="widget-title">
                        <h2 className="mb-0">Availability</h2>
                    </div>
                    <div className="filterDD">
                        <ul className="clearfix">
                            <li>
                                <input
                                    type="checkbox"
                                    value="instock"
                                    id="instock"
                                />
                                <label htmlFor="instock">
                                    <span></span>In stock
                                </label>
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    value="outofstock"
                                    id="outofstock"
                                />
                                <label htmlFor="outofstock">
                                    <span></span>Out of stock
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widget filterBox filter-widget product-tag">
                    <div className="widget-title">
                        <h2 className="mb-0">Product Tags</h2>
                    </div>
                    <div className="widget-content filterDD">
                        <ul className="clearfix product-tags">
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag $100 - $400"
                                >
                                    $100 - $400
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag $400 - $600"
                                >
                                    $400 - $600
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag $600 - $800"
                                >
                                    $600 - $800
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag Above $800"
                                >
                                    Above $800
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag Allen Vela"
                                >
                                    Allen Vela
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag Adidas"
                                >
                                    Adidas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag Black"
                                >
                                    Black
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Show products matching tag Blue"
                                >
                                    Blue
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
               
                <div className="sidebar_widget static-banner">
                    <a href="shop-fullwidth.html">
                        <img src="/assets/images/shop-banner.jpg" alt="image" />
                    </a>
                </div>
            </div>
        </div>
    );
}
