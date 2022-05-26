import React from 'react'

type Props = {}

export default function ProductCardForm({}: Props) {
  return (
    <form method="post" action="#" className="product-form hidedropdown">
      <div
        className="swatches-image swatch clearfix swatch-0 option1"
        data-option-index="0"
      >
        <div className="product-form__item">
          <label className="label d-flex">
            Color:
            <span className="required d-none">*</span>
            <span className="slVariant ms-1 fw-bold">Red</span>
          </label>
          <ul className="swatches d-flex-wrap list-unstyled clearfix">
            <li
              data-value="Green"
              className="swatch-element color green available active"
            >
              <label
                className="swatchLbl color rounded-0 rectangle green"
                title="Green"
              ></label>
              <span className="tooltip-label top">Green</span>
            </li>
            <li
              data-value="peach"
              className="swatch-element color peach available"
            >
              <label
                className="swatchLbl color rounded-0 rectangle peach"
                title="Blue"
              ></label>
              <span className="tooltip-label top">Peach</span>
            </li>
            <li
              data-value="Green"
              className="swatch-element color white available"
            >
              <label
                className="swatchLbl color rounded-0 rectangle white"
                title="White"
              ></label>
              <span className="tooltip-label top">White</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="swatch clearfix swatch-1 option2" data-option-index="1">
        <div className="product-form__item">
          <label className="label d-flex">
            Size:
            <span className="required d-none">*</span>
            <span className="slVariant ms-1 fw-bold">S</span>
          </label>
          <ul className="swatches-size d-flex-center list-unstyled clearfix">
            <li data-value="S" className="swatch-element s available active">
              <label className="swatchLbl rounded-0 rectangle" title="S">
                S
              </label>
              <span className="tooltip-label">S</span>
            </li>
            <li data-value="M" className="swatch-element m available">
              <label className="swatchLbl rounded-0 rectangle" title="M">
                M
              </label>
              <span className="tooltip-label">M</span>
            </li>
            <li data-value="L" className="swatch-element l available">
              <label className="swatchLbl rounded-0 rectangle" title="L">
                L
              </label>
              <span className="tooltip-label">L</span>
            </li>
            <li data-value="XL" className="swatch-element xl available">
              <label className="swatchLbl rounded-0 rectangle" title="XL">
                XL
              </label>
              <span className="tooltip-label">XL</span>
            </li>
            <li className="ms-1">
              <a
                href="#sizechart"
                className="sizelink link-underline text-uppercase"
              >
                <i className="icon an an-ruler d-none"></i> Size Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="product-action w-100 clearfix">
        <div className="product-form__item--quantity d-flex-center mb-3">
          <div className="qtyField">
            <a className="qtyBtn minus" href="javascript:void(0);">
              <i className="icon an an-minus-r" aria-hidden="true"></i>
            </a>
            <input
              type="text"
              name="quantity"
              value="1"
              className="product-form__input qty rounded-0"
            />
            <a className="qtyBtn plus" href="javascript:void(0);">
              <i className="icon an an-plus-r" aria-hidden="true"></i>
            </a>
          </div>
          <div className="pro-stockLbl ms-3">
            <span className="d-flex-center stockLbl instock">
              <i className="icon an an-check-cil"></i>
              <span> In stock</span>
            </span>
            <span className="d-flex-center stockLbl preorder d-none">
              <i className="icon an an-clock-r"></i>
              <span> Pre-order Now</span>
            </span>
            <span className="d-flex-center stockLbl outstock d-none">
              <i className="icon an an-times-cil"></i> <span>Sold out</span>
            </span>
            <span
              className="d-flex-center stockLbl lowstock d-none"
              data-qty="15"
            >
              <i className="icon an an-exclamation-cir"></i>
              <span>
                {" "}
                Order now, Only <span className="items">10</span> left!
              </span>
            </span>
          </div>
        </div>
        <div className="product-form__item--submit">
          <button
            type="submit"
            name="add"
            className="btn rounded-0 btn-outline-primary product-form__cart-submit"
          >
            <span>Add to cart</span>
          </button>
          <button
            type="submit"
            name="add"
            className="btn rounded-0 btn-outline-primary product-form__sold-out d-none"
            disabled
          >
            Sold out
          </button>
        </div>
        <div className="product-form__item--buyit clearfix">
          <button type="button" className="btn rounded-0 proceed-to-checkout">
            Buy it now
          </button>
        </div>
        <div className="agree-check customCheckbox clearfix d-none">
          <input id="prTearm" name="tearm" type="checkbox" value="tearm" />
          <label htmlFor="prTearm">I agree with the terms and conditions</label>
        </div>
      </div>

      <p className="infolinks d-flex-center mt-2 mb-3">
        <a className="btn add-to-wishlist d-none" href="my-wishlist.html">
          <i className="icon an an-heart-l me-1" aria-hidden="true"></i>{" "}
          <span>Add to Wishlist</span>
        </a>
        <a className="btn add-to-wishlist" href="compare-style1.html">
          <i className="icon an an-sync-ar me-1" aria-hidden="true"></i>{" "}
          <span>Add to Compare</span>
        </a>
        <a className="btn shippingInfo" href="#ShippingInfo">
          <i className="icon an an-paper-l-plane me-1"></i> Delivery &amp;
          Returns
        </a>
        <a className="btn emaillink me-0" href="#productInquiry">
          {" "}
          <i className="icon an an-question-cil me-1"></i> Ask A Question
        </a>
      </p>
    </form>
  );
}