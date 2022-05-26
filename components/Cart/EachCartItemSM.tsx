import React from "react";

type Props = {};

export default function EachCartItemSM({}: Props) {
  return (
    <li className="item d-flex justify-content-center align-items-center">
      <a className="product-image" href="product-layout1.html">
        <img
          className="blur-up lazyloaded"
          src="/assets/images/products/cart-product-img1.jpg"
          data-src="/assets/images/products/cart-product-img1.jpg"
          alt="image"
          title=""
        />
      </a>
      <div className="product-details">
        <a className="product-title" href="product-layout1.html">
          Floral Crop Top
        </a>
        <div className="variant-cart">Black / XL</div>
        <div className="priceRow">
          <div className="product-price">
            <span className="money">$59.00</span>
          </div>
        </div>
      </div>
      <div className="qtyDetail text-center">
        <div className="wrapQtyBtn">
          <div className="qtyField">
            <a className="qtyBtn minus" href="javascript:void(0);">
              <i className="icon an an-minus-r" aria-hidden="true"></i>
            </a>
            <input type="text" name="quantity" value="1" className="qty" />
            <a className="qtyBtn plus" href="javascript:void(0);">
              <i className="icon an an-plus-l" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <a href="#" className="edit-i remove">
          <i
            className="icon an an-edit-l"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="Edit"
            aria-label="Edit"
          ></i>
        </a>
        <a href="#" className="remove">
          <i
            className="an an-times-r"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="Remove"
            aria-label="Remove"
          ></i>
        </a>
      </div>
    </li>
  );
}
