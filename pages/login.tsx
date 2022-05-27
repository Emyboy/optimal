import React from "react";
import Link from "next/link";

type Props = {};

export default function login({}: Props) {
    return (
        <div>
            <div className="collection-header">
                <div className="collection-hero">
                    <div className="collection-hero__image"></div>
                    <div className="collection-hero__title-wrapper container">
                        {/* <h1 className="collection-hero__title">Login</h1>
                      <div className="breadcrumbs text-uppercase mt-1 mt-lg-2">
                          <a href="index.html" title="Back to the home page">
                              Home
                          </a>
                          <span>|</span>
                          <span className="fw-bold">Login</span>
                      </div> */}
                    </div>
                </div>
            </div>

            <div className="container pt-5">
                <div className="login-register pt-2 pt-lg-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mb-md-0">
                            <div className="inner">
                                <form
                                    method="post"
                                    action="#"
                                    className="customer-form"
                                >
                                    <h3 className="h4 text-uppercase">
                                        REGISTERED CUSTOMERS
                                    </h3>
                                    <p>
                                        If you have an account with us, please
                                        log in.
                                    </p>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="CustomerEmail">
                                                    Email{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="customer[email]"
                                                    placeholder="Email"
                                                    id="CustomerEmail"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="CustomerPassword">
                                                    Password{" "}
                                                    <span className="required">
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="customer[password]"
                                                    placeholder="Password"
                                                    id="CustomerPassword"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="text-left col-12 col-sm-12 col-md-12 col-lg-12">
                                            <p className="d-flex-center">
                                                <input
                                                    type="submit"
                                                    className="btn rounded me-auto btn-lg"
                                                    value="Sign In"
                                                />
                                                <a href="forgot-password.html">
                                                    Forgot your password?
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="inner">
                                <h3 className="h4 text-uppercase">
                                    NEW CUSTOMER?
                                </h3>
                                <p>
                                    Registering for this site allows you to
                                    access your order status and history. We’ll
                                    get a new account set up for you in no time.
                                    For this will only ask you for information
                                    necessary to make the purchase process
                                    faster and easier
                                </p>
                                <Link href={`/register`}>
                                    <a className="btn rounded">
                                        Create an account
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
