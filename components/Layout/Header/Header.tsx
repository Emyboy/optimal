import CartPopup from "@components/Cart/CartPopup";
import Globals from "../../../Global";
import React, { useState } from "react";
import { useWindowSize } from "react-use";
import MobileNav from "../MobileNav/MobileNav";
import Link from "next/link";
import Img from "next/image";
import logo from "@assets/images/logo-demo-4.svg";
import { useSelector } from "react-redux";
import { ReduxStore } from "interfaces/redux.interface";

export default function Header() {
    const { user } = useSelector((state: ReduxStore) => state.auth);
    const [showSearch, setShowSearch] = useState(false);
    const [showCart, _setShowCart] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const { width } = useWindowSize();

    return (
        <>
            {width < Globals.MOBILE_SCREEN && (
                <MobileNav
                    show={showMobileNav}
                    onClose={() => setShowMobileNav(false)}
                />
            )}
            <CartPopup
                show={showCart}
                onClose={() => _setShowCart(!showCart)}
            />
            <header
                id="header"
                className="header header-main mih-70 d-flex align-items-center header-4 shadow-sm"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-2 align-self-center justify-content-start d-flex">
                            <button
                                onClick={() => setShowMobileNav(true)}
                                type="button"
                                className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open me-3 d-lg-none"
                            >
                                <i className="icon an an-times-l"></i>
                                <i className="icon an an-bars-l"></i>
                            </button>
                            <div className="logo">
                                <a href="index.html">
                                    <Img
                                        className="logo-img"
                                        src={logo}
                                        alt="Optimal"
                                        title="Optimal"
                                        width="700"
                                        height="200"
                                    />
                                    <span className="logo-txt d-none">
                                        Optimal
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-1 col-sm-1 col-md-1 col-lg-7 align-self-center d-menu-col">
                            <nav className="grid__item" id="AccessibleNav">
                                <ul
                                    id="siteNav"
                                    className="site-nav medium left hidearrow"
                                >
                                    <li className="lvl1 parent megamenu">
                                        <Link href={"/"}>
                                            <a href="#;">
                                                Home{" "}
                                                <i className="an an-angle-down-l"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="lvl1 parent megamenu">
                                        <Link href={`/about`}>
                                            <a>
                                                About{" "}
                                                <i className="an an-angle-down-l"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 align-self-center icons-col d-flex justify-content-end">
                            <div
                                className="site-search iconset"
                                onClick={() => setShowSearch(!showSearch)}
                            >
                                <i className="icon an an-search-l d-block d-lg-none"></i>
                                <span className="text d-none d-lg-flex">
                                    Search
                                </span>
                            </div>
                            <Link passHref href={`/profile`}>
                                <div className="user-link iconset">
                                    <i className="icon an an-user d-block d-lg-none"></i>
                                    <span className="text d-none d-lg-flex">
                                        My Account
                                    </span>
                                </div>
                            </Link>
                            <div
                                className="header-cart iconset"
                                onClick={() => {
                                    _setShowCart(!showCart);
                                    // alert("done");
                                }}
                            >
                                <a
                                    //
                                    className="site-header__cart btn-minicart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#minicart-drawer"
                                >
                                    <i className="icon an an-sq-bag"></i>
                                    <span className="site-cart-count counter d-flex-center justify-content-center position-absolute translate-middle rounded-circle">
                                        2
                                    </span>
                                    <span className="tooltip-label">Cart </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="search-popup"
                    className={`search-drawer ${
                        showSearch && "active"
                    } shadow-lg`}
                >
                    <div className="container">
                        <span
                            className="closeSearch an an-times-l"
                            onClick={() => setShowSearch(!showSearch)}
                        ></span>
                        <form
                            className="form minisearch"
                            id="header-search"
                            action="#"
                            method="get"
                        >
                            <label className="label">
                                <span>Search</span>
                            </label>
                            <div className="control">
                                <div className="searchField">
                                    <div className="search-category">
                                        <select
                                            id="rgsearch-category"
                                            name="rgsearch[category]"
                                            data-default="All Categories"
                                        >
                                            <option
                                                value="00"
                                                label="All Categories"
                                                selected
                                            >
                                                All Categories
                                            </option>
                                            <optgroup
                                                id="rgsearch-shop"
                                                label="Shop"
                                            >
                                                <option value="0">- All</option>
                                                <option value="1">- Men</option>
                                                <option value="2">
                                                    - Women
                                                </option>
                                                <option value="3">
                                                    - Shoes
                                                </option>
                                                <option value="4">
                                                    - Blouses
                                                </option>
                                                <option value="5">
                                                    - Pullovers
                                                </option>
                                                <option value="6">
                                                    - Bags
                                                </option>
                                                <option value="7">
                                                    - Accessories
                                                </option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <button
                                            type="submit"
                                            title="Search"
                                            className="action search"
                                            disabled
                                        >
                                            <i className="icon an an-search-l"></i>
                                        </button>
                                        <input
                                            type="text"
                                            autoFocus
                                            name="q"
                                            placeholder="Search by keyword or #"
                                            className="input-text"
                                            onChange={(e) => {}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
            {showSearch && (
                <div
                    // className="bg-danger modalOverly show"
                    onClick={() => setShowSearch(!showSearch)}
                    style={{
                        position: "absolute",
                        zIndex: 9,
                        height: "100%",
                        width: "100vw",
                        backgroundColor: "#19153255",
                    }}
                ></div>
            )}
        </>
    );
}
