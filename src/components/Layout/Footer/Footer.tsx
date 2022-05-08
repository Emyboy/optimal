import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="footer footer-1">
            <div className="footer-top clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center about-col mb-4">
                            <img
                                src="assets/images/footer-logo.png"
                                alt="Optimal"
                                className="mb-3"
                            />
                            <p>55 Gallaxy Enque, 2568 steet, 23568 NY</p>
                            <p className="mb-0 mb-md-3">
                                Phone: (440) 123 456 7890 | Email:{" "}
                                <a href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links">
                            <h4 className="h4">Informations</h4>
                            <ul>
                                <li>
                                    <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                    <a href="aboutus-style1.html">About us</a>
                                </li>
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.html">
                                        Privacy policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Terms &amp; condition</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-2 footer-links">
                            <h4 className="h4">Quick Shop</h4>
                            <ul>
                                <li>
                                    <a href="#">Women</a>
                                </li>
                                <li>
                                    <a href="#">Men</a>
                                </li>
                                <li>
                                    <a href="#">Kids</a>
                                </li>
                                <li>
                                    <a href="#">Sportswear</a>
                                </li>
                                <li>
                                    <a href="#">Sale</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links">
                            <h4 className="h4">Customer Services</h4>
                            <ul>
                                <li>
                                    <a href="#">Request Personal Data</a>
                                </li>
                                <li>
                                    <a href="faqs-style1.html">FAQ's</a>
                                </li>
                                <li>
                                    <a href="contact-style1.html">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Orders and Returns</a>
                                </li>
                                <li>
                                    <a href="#">Support Center</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 newsletter-col">
                            <div className="display-table pt-md-3 pt-lg-0">
                                <div className="display-table-cell footer-newsletter">
                                    <form action="#" method="post">
                                        <label className="h4">
                                            NEWSLETTER SIGN UP
                                        </label>
                                        <p>
                                            Enter Your Email To Receive Daily
                                            News And Get 20% Off Coupon For All
                                            Items.
                                        </p>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="brounded-start input-group__field newsletter-input mb-0"
                                                name="EMAIL"
                                                placeholder="Email address"
                                                required
                                            />
                                            <span className="input-group__btn">
                                                <button
                                                    type="submit"
                                                    className="btn newsletter__submit rounded-end"
                                                    name="commit"
                                                    id="Subscribe"
                                                >
                                                    <i className="an an-envelope-l"></i>
                                                </button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <ul className="list-inline social-icons mt-3 pt-1">
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Facebook"
                                        aria-label="Facebook"
                                    >
                                        <i
                                            className="an an-facebook"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Twitter"
                                        aria-label="Twitter"
                                    >
                                        <i
                                            className="an an-twitter"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Pinterest"
                                        aria-label="Pinterest"
                                    >
                                        <i
                                            className="an an-pinterest-p"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Instagram"
                                        aria-label="Instagram"
                                    >
                                        <i
                                            className="an an-instagram"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="TikTok"
                                        aria-label="TikTok"
                                    >
                                        <i
                                            className="an an-tiktok"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        href="#"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Whatsapp"
                                        aria-label="Whatsapp"
                                    >
                                        <i
                                            className="an an-whatsapp"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom clearfix">
                <div className="container">
                    <div className="d-flex-center flex-column justify-content-md-between flex-md-row-reverse">
                        <img
                            src="assets/images/payment.png"
                            alt="Paypal Visa Payments"
                        />
                        <div className="copytext text-uppercase">
                            © 2022 Optimal. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
