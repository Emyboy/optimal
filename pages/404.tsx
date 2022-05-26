import React from "react";

type Props = {};

export default function PageNotFound({}: Props) {
    return (
        <section>
            <div className="collection-header">
                <div className="collection-hero">
                    <div className="collection-hero__image"></div>
                    <div className="collection-hero__title-wrapper container">
                        <h2 className="collection-hero__title">
                            404 Error Page
                        </h2>
                        <div className="breadcrumbs text-uppercase mt-1 mt-lg-2">
                            <a href="index.html" title="Back to the home page">
                                Home
                            </a>
                            <span>|</span>
                            <span className="fw-bold">404 Error Page</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="error-content py-4">
                            <img
                                src="assets/images/error-404.jpg"
                                alt="error-404"
                            />
                            <div className="page-title">
                                <h1>404 - PAGE NOT FOUND</h1>
                            </div>
                            <p>
                                We cant seem to find page you are looking for.
                            </p>
                            <p>
                                <a
                                    href="index.html"
                                    className="btn btn-outline-primary rounded text-capitalize mb-2 me-2"
                                >
                                    Go Back
                                </a>
                                <a
                                    href="shop-left-sidebar.html"
                                    className="btn rounded mb-2 text-capitalize"
                                >
                                    Continue shopping
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
