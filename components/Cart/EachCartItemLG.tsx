import React from 'react'

type Props = {}

export default function EachCartItemLG({}: Props) {
  return (
    <tr className="cart__row border-bottom line1 cart-flex border-top">
      <td className="cart-delete text-center small--hide">
        <a
          href="#"
          className="btn btn--secondary cart__remove remove-icon position-static"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="Remove item"
          aria-label="Remove item"
        >
          <i className="icon an an-times-r"></i>
        </a>
      </td>
      <td className="cart__image-wrapper cart-flex-item">
        <a href="product-layout1.html">
          <img
            className="cart__image blur-up lazyloaded"
            data-src="assets/images/products/product-6-1.jpg"
            src="assets/images/products/product-6-1.jpg"
            alt="Sunset Sleep Scarf Top"
            width="80"
          />
        </a>
      </td>
      <td className="cart__meta small--text-left cart-flex-item">
        <div className="list-view-item__title">
          <a href="product-layout1.html">Sunset Sleep Scarf Top</a>
        </div>
        <div className="cart__meta-text">
          Color: Black
          <br />
          Size: Small
          <br />
          Qty: 2
        </div>
        <div className="cart-price d-md-none">
          <span className="money fw-500">$297.00</span>
        </div>
      </td>
      <td className="cart__price-wrapper cart-flex-item text-center small--hide">
        <span className="money">$99.00</span>
      </td>
      <td className="cart__update-wrapper cart-flex-item text-end text-md-center">
        <div className="cart__qty d-flex justify-content-end justify-content-md-center">
          <div className="qtyField">
            <a className="qtyBtn minus" href="javascript:void(0);">
              <i className="icon an an-minus-r"></i>
            </a>
            <input
              className="cart__qty-input qty"
              type="text"
              name="updates[]"
              value="1"
              pattern="[0-9]*"
            />
            <a className="qtyBtn plus" href="javascript:void(0);">
              <i className="icon an an-plus-r"></i>
            </a>
          </div>
        </div>
        <a
          href="#"
          title="Remove"
          className="removeMb d-md-none d-inline-block text-decoration-underline mt-2 me-3"
        >
          Remove
        </a>
      </td>
      <td className="cart-price cart-flex-item text-center small--hide">
        <span className="money fw-500">$297.00</span>
      </td>
    </tr>
  );
}