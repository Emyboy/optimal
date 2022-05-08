import React from "react";

type Props = {
    show: boolean;
    onClose: () => void;
};

export default function MobileNav({ show, onClose }: Props) {
    return (
        <>
            <div
                className={`mobile-nav-wrapper ${show && "active"}`}
                role="navigation"
            >
                <div className="closemobileMenu" onClick={() => onClose()}>
                    <i className="icon an an-times-l pull-right"></i> Close Menu
                </div>
                <ul id="MobileNav" className="mobile-nav">
                    <li className="lvl1 parent megamenu">
                        <a href="index.html">
                            Home <i className="an an-plus-l"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="#" className="site-nav">
                                    Home Styles <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="site-nav">
                                    Home Styles <i className="an an-plus-l"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="#">
                            Shop <i className="an an-plus-l"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="#" className="site-nav">
                                    Category Page{" "}
                                    <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="site-nav">
                                    Shop Page <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="site-nav">
                                    Shop Page <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="site-nav">
                                    Shop Other Page{" "}
                                    <i className="an an-plus-l"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="#">
                            Product <i className="an an-plus-l"></i>
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="product-standard.html"
                                    className="site-nav"
                                >
                                    Product Types
                                    <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="product-layout1.html"
                                    className="site-nav"
                                >
                                    Product Page Types{" "}
                                    <i className="an an-plus-l"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="#">
                            Pages <i className="an an-plus-l"></i>
                        </a>
                        <ul>
                            <li>
                                <a
                                    href="aboutus-style1.html"
                                    className="site-nav"
                                >
                                    About Us <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="contact-style1.html"
                                    className="site-nav"
                                >
                                    Contact Us <i className="an an-plus-l"></i>
                                </a>
                                <ul className="dropdown">
                                    <li>
                                        <a
                                            href="contact-style1.html"
                                            className="site-nav"
                                        >
                                            Contact Us Style1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="contact-style2.html"
                                            className="site-nav last"
                                        >
                                            Contact Us Style2
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    href="lookbook-2columns.html"
                                    className="site-nav"
                                >
                                    Lookbook <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="faqs-style1.html" className="site-nav">
                                    FAQs <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="brands-style1.html"
                                    className="site-nav"
                                >
                                    Brands <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="my-account.html" className="site-nav">
                                    My Account <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="site-nav">
                                    Empty Pages <i className="an an-plus-l"></i>
                                </a>
                            </li>
                            <li>
                                <a href="error-404.html" className="site-nav">
                                    Error 404{" "}
                                </a>
                            </li>
                            <li>
                                <a href="cms-page.html" className="site-nav">
                                    CMS Page
                                </a>
                            </li>
                            <li>
                                <a
                                    href="coming-soon.html"
                                    className="site-nav last"
                                >
                                    Coming soon{" "}
                                    <span className="lbl nm_label2">New</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="lvl1 parent megamenu">
                        <a href="blog-left-sidebar.html">
                            Blog <i className="an an-plus-l"></i>
                        </a>
                    </li>
                    <li className="acLink"></li>
                    <li className="lvl1 bottom-link">
                        <a href="login.html">Login</a>
                    </li>
                    <li className="lvl1 bottom-link">
                        <a href="register.html">Signup</a>
                    </li>
                    <li className="lvl1 bottom-link">
                        <a href="my-wishlist.html">Wishlist</a>
                    </li>
                    <li className="lvl1 bottom-link">
                        <a href="compare-style1.html">Compare</a>
                    </li>
                    <li className="help bottom-link">
                        <b>NEED HELP?</b>
                        <br />
                        Call: +41 525 523 5687
                    </li>
                </ul>
            </div>
            {true && (
                <div
                    // className="bg-danger modalOverly show"
                    onClick={() => onClose()}
                    style={{
                        position: "absolute",
                        zIndex: 9,
                        height: "100vh",
                        width: "100vw",
                        // backgroundColor: "#19153273",
                    }}
                ></div>
            )}
        </>
    );
}
