import { EachProduct } from "@components/EachProduct";
import SearchFilter from "@components/SearchFilter";
import React from "react";

type Props = {};

export default function SearchResults({}: Props) {
    return (
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 sidebar filterbar">
              <SearchFilter />
            </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-9 main-col">
                <div className="page-title">
                  <h1>Womens</h1>
                </div>
                <ul className="active-filters d-flex flex-wrap align-items-center m-0 list-unstyled d-none">
                  <li>
                    <a href="#">Clear all</a>
                  </li>
                  <li>
                    <a href="#">
                      Men <i className="an an-times-l"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Neckalses <i className="an an-times-l"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Accessories <i className="an an-times-l"></i>
                    </a>
                  </li>
                </ul>
                <div className="toolbar">
                  <div className="filters-toolbar-wrapper">
                    <ul className="list-unstyled d-flex align-items-center">
                      <li className="product-count d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-filter an an-slider-3 d-inline-flex d-lg-none me-2 me-sm-3"
                        >
                          <span className="hidden">Filter</span>
                        </button>
                        <div className="filters-toolbar__item">
                          <span className="filters-toolbar__product-count d-none d-sm-block">
                            Showing: 21 products
                          </span>
                        </div>
                      </li>
                      <li className="collection-view ms-sm-auto">
                        <div className="filters-toolbar__item collection-view-as d-flex align-items-center me-3">
                          <a
                            href="javascript:void(0)"
                            className="change-view prd-grid change-view--active"
                          >
                            <i className="icon an an-th" aria-hidden="true"></i>
                            <span className="tooltip-label">Grid View</span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="change-view prd-list"
                          >
                            <i
                              className="icon an an-th-list"
                              aria-hidden="true"
                            ></i>
                            <span className="tooltip-label">List View</span>
                          </a>
                        </div>
                      </li>
                      <li className="filters-sort ms-auto ms-sm-0">
                        <div className="filters-toolbar__item">
                          <label htmlFor="SortBy" className="hidden">
                            Sort by:
                          </label>
                          <select
                            name="SortBy"
                            id="SortBy"
                            className="filters-toolbar__input filters-toolbar__input--sort"
                          >
                            <option value="featured" selected>
                              Featured
                            </option>
                            <option value="best-selling">Best selling</option>
                            <option value="title-ascending">
                              Alphabetically, A-Z
                            </option>
                            <option value="title-descending">
                              Alphabetically, Z-A
                            </option>
                            <option value="price-ascending">
                              Price, low to high
                            </option>
                            <option value="price-descending">
                              Price, high to low
                            </option>
                            <option value="created-ascending">
                              Date, old to new
                            </option>
                            <option value="created-descending">
                              Date, new to old
                            </option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid-products grid--view-items shop-grid-5 prd-grid">
                  <div className="row">
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                    <EachProduct size="4" />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
}
