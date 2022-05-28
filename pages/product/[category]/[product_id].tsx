import { EachProduct } from "@components/EachProduct";
import ProductCardForm from "@components/ProductDetails/ProductCardForm";
import WhyUs from "@components/WhyUs";
import axios from "axios";
import { Product } from "interfaces/product.interface";
import { GetServerSideProps } from "next";
import { AppContext } from "next/app";
import React from "react";

type Props = {
  product: Product;
};

export default function product_details({product}: Props) {
  console.log(product)
    return (
        <div className="pt-5">
            <div className="breadcrumbs-wrapper text-uppercase">
                <div className="container">
                    <div className="breadcrumbs">
                        <a href="index.html" title="Back to the home page">
                            Home
                        </a>
                        <span>|</span>
                        <span className="fw-bold">Product Layout Style3</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="product-single">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product-sticky-style">
                                <div className="product-details-img product-horizontal-style clearfix mb-3 mb-md-0">
                                    <div className="zoompro-wrap product-zoom-right w-100 p-0">
                                        <div className="zoompro-span">
                                            <img
                                                id="zoompro"
                                                className="zoompro"
                                                src="/assets/images/products/product-3.jpg"
                                                data-zoom-image="/assets/images/products/product-3.jpg"
                                                alt="product"
                                            />
                                        </div>
                                        <div className="product-labels">
                                            <span className="lbl pr-label1">
                                                new
                                            </span>
                                            <span className="lbl pr-label3">
                                                Trending
                                            </span>
                                        </div>
                                        <div className="product-wish">
                                            <a
                                                className="wishIcon wishlist rounded-0 m-0"
                                                href="my-wishlist.html"
                                            >
                                                <i className="icon an an-heart"></i>
                                                <span className="tooltip-label left">
                                                    Available in Wishlist
                                                </span>
                                            </a>
                                        </div>
                                        <div className="product-buttons">
                                            <a
                                                href="https://www.youtube.com/watch?v=93A2jOW5Mog"
                                                className="mfpbox mfp-with-anim btn rounded-0 popup-video"
                                            >
                                                <i className="icon an an-video"></i>
                                                <span className="tooltip-label">
                                                    Watch Video
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                className="btn rounded-0 prlightbox"
                                            >
                                                <i className="icon an an-expand-l-arrows"></i>
                                                <span className="tooltip-label">
                                                    Zoom Image
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="product-thumb product-horizontal-thumb w-100 pt-2 mt-1"
                                    style={{ overflowX: "scroll" }}
                                >
                                    <div className="d-flex">
                                        {[
                                            1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1,
                                            3,
                                        ].map((val, i) => {
                                            return (
                                                <img
                                                    key={`thumb-${i}`}
                                                    className="m-2 blur-up lazyloaded"
                                                    data-src="/assets/images/products/product-3-1.jpg"
                                                    src="/assets/images/products/product-3-1.jpg"
                                                    alt="product"
                                                    style={{ width: "100px" }}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="product-single__meta">
                                <div className="countdown-text style2 d-flex-wrap mb-3 pb-1">
                                    <label className="mb-2 mb-lg-0 border-0">
                                        Hurry up! Sales End In{" "}
                                    </label>
                                    <div
                                        className="prcountdown d-flex"
                                        data-countdown="2024/10/01"
                                    >
                                        <span className="ht-count days">
                                            <span className="count-inner">
                                                <span className="time-count">
                                                    860
                                                </span>{" "}
                                                <span>Days</span>
                                            </span>
                                        </span>{" "}
                                        <span className="ht-count hour">
                                            <span className="count-inner">
                                                <span className="time-count">
                                                    0
                                                </span>{" "}
                                                <span>HR</span>
                                            </span>
                                        </span>{" "}
                                        <span className="ht-count minutes">
                                            <span className="count-inner">
                                                <span className="time-count">
                                                    19
                                                </span>{" "}
                                                <span>Min</span>
                                            </span>
                                        </span>{" "}
                                        <span className="ht-count second">
                                            <span className="count-inner">
                                                <span className="time-count">
                                                    41
                                                </span>{" "}
                                                <span>Sc</span>
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <h1 className="product-single__title">
                                    Product Layout Style3
                                </h1>
                                <div className="product-review mb-2">
                                    <a
                                        className="reviewLink d-flex-center"
                                        href="#reviews"
                                    >
                                        <i className="an an-star"></i>
                                        <i className="an an-star mx-1"></i>
                                        <i className="an an-star"></i>
                                        <i className="an an-star mx-1"></i>
                                        <i className="an an-star-o"></i>
                                        <span className="spr-badge-caption ms-2">
                                            16 Reviews
                                        </span>
                                    </a>
                                </div>

                                <div className="product-info">
                                    <p className="product-type">
                                        Vendor: <span>Bohemian France</span>
                                    </p>
                                    <p className="product-type">
                                        Product Type: <span>Floral Top</span>
                                    </p>
                                    <p className="product-sku">
                                        SKU:{" "}
                                        <span className="variant-sku">
                                            1416PT-1
                                        </span>
                                    </p>
                                </div>

                                <div className="product-single__price pb-1">
                                    <span className="visually-hidden">
                                        Regular price
                                    </span>
                                    <span className="product-price__sale--single">
                                        <span className="product-price-old-price">
                                            $200.00
                                        </span>
                                        <span className="product-price__price product-price__sale">
                                            $225.00
                                        </span>
                                        <span className="discount-badge">
                                            <span className="devider me-2">
                                                |
                                            </span>
                                            <span>Save: </span>
                                            <span className="product-single__save-amount">
                                                <span className="money">
                                                    $99.00
                                                </span>
                                            </span>
                                            <span className="off ms-1">
                                                (<span>25</span>%)
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                <div
                                    className="orderMsg d-flex-center"
                                    data-user="23"
                                    data-time="24"
                                >
                                    <img
                                        src="/assets/images/order-icon.jpg"
                                        alt="order"
                                    />
                                    <p className="m-0">
                                        <strong className="items">8</strong>{" "}
                                        Sold in last{" "}
                                        <strong className="time">14</strong>{" "}
                                        hours
                                    </p>
                                    <p
                                        id="quantity_message"
                                        className="ms-2 ps-2 border-start"
                                    >
                                        Hurry! Only{" "}
                                        <span className="items fw-bold">4</span>{" "}
                                        left in stock.
                                    </p>
                                </div>
                            </div>
                            <ProductCardForm />
                            <div className="social-sharing d-flex-center mb-3">
                                <span className="sharing-lbl me-2">
                                    Share :
                                </span>
                                <a
                                    href="#"
                                    className="d-flex-center btn btn-link btn--share share-facebook"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Share on Facebook"
                                >
                                    <i className="icon an an-facebook mx-1"></i>
                                    <span className="share-title d-none">
                                        Facebook
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex-center btn btn-link btn--share share-twitter"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Tweet on Twitter"
                                >
                                    <i className="icon an an-twitter mx-1"></i>
                                    <span className="share-title d-none">
                                        Tweet
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex-center btn btn-link btn--share share-pinterest"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Pin on Pinterest"
                                >
                                    <i className="icon an an-pinterest-p mx-1"></i>{" "}
                                    <span className="share-title d-none">
                                        Pin it
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex-center btn btn-link btn--share share-linkedin"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Share on Linkedin"
                                >
                                    <i className="icon an an-linkedin mx-1"></i>
                                    <span className="share-title d-none">
                                        Linkedin
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    className="d-flex-center btn btn-link btn--share share-email"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title=""
                                    data-bs-original-title="Share by Email"
                                >
                                    <i className="icon an an-envelope-l mx-1"></i>
                                    <span className="share-title d-none">
                                        Email
                                    </span>
                                </a>
                            </div>

                            <div className="freeShipMsg" data-price="199">
                                <i
                                    className="icon an an-truck"
                                    aria-hidden="true"
                                ></i>
                                SPENT{" "}
                                <b className="freeShip">
                                    <span
                                        className="money"
                                        data-currency-usd="$199.00"
                                        data-currency="USD"
                                    >
                                        $199.00
                                    </span>
                                </b>{" "}
                                MORE FOR FREE SHIPPING
                            </div>
                            <div
                                className="userViewMsg"
                                data-user="20"
                                data-time="11000"
                            >
                                <i
                                    className="icon an an-eye-r"
                                    aria-hidden="true"
                                ></i>
                                <strong className="uersView">12</strong> People
                                are Looking for this Product
                            </div>

                            <div className="tabs-listing mt-2 mt-md-5">
                                <div className="tab-container">
                                    <h3 className="tabs-ac-style active">
                                        Description
                                    </h3>
                                    <div
                                        id="description"
                                        className="tab-content"
                                        style={{ display: "block" }}
                                    >
                                        <div className="product-description">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
                                                    <p>
                                                        Lorem Ipsum is simply
                                                        dummy text of the
                                                        printing and typesetting
                                                        industry. Lorem Ipsum
                                                        has been the industry
                                                        standard dummy text ever
                                                        since the 1500s, when an
                                                        unknown printer took a
                                                        galley of type and
                                                        scrambled it to make a
                                                        type specimen book.
                                                    </p>

                                                    <h4 className="pt-2 text-uppercase">
                                                        Variations of passages
                                                    </h4>
                                                    <p>
                                                        All the Lorem Ipsum
                                                        generators on the
                                                        Internet tend to repeat
                                                        predefined chunks as
                                                        necessary, making this
                                                        the first true generator
                                                        on the Internet. It uses
                                                        a dictionary of over 200
                                                        Latin words.
                                                    </p>
                                                    <h4 className="pt-2 text-uppercase">
                                                        Popular belief specimen
                                                    </h4>
                                                    <p>
                                                        There are many
                                                        variations of passages
                                                        of Lorem Ipsum
                                                        available, but the
                                                        majority have suffered
                                                        alteration in some form,
                                                        by injected humour, or
                                                        randomised words which
                                                        do not look even
                                                        slightly believable. If
                                                        you are going to use a
                                                        passage.
                                                    </p>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                                    <img
                                                        data-src="/assets/images/about/about-info-s3.jpg"
                                                        src="/assets/images/about/about-info-s3.jpg"
                                                        alt="image"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section product-slider pb-5">
                <div className="container">
                    <div className="row">
                        <div className="section-header col-12">
                            <h2 className="text-transform-none">
                                You May Also Like
                            </h2>
                        </div>
                    </div>

                    <div className="grid-products grid--view-items shop-grid-5 prd-grid">
                        <div className="row">
                            {/* <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" />
                <EachProduct size="4" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <WhyUs />
        </div>
    );
}



export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("CONTEXT ---", Object.keys(context));
  console.log("THING --", context.params);
  // Fetch data from external API
  // const res = await ProductService.getRecentProducts();
  const url =
      process.env.NEXT_PUBLIC_API_URL +
      `/products/?slug=${context?.params?.product_id}`;
      console.log(url)
  const res = await axios(
      url,
  );
  
  // Pass data to the page via props
  return { props: { product: res.data } };
};