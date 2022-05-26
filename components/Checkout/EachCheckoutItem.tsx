import React from 'react'

type Props = {}

export default function EachCheckoutItem({}: Props) {
  return (
    <tr>
      <td className="thumbImg">
        <a href="product-layout1.html" className="thumb d-inline-block">
          <img
            className="cart__image"
            src="/assets/images/products/product-6-1.jpg"
            alt="Sunset Sleep Scarf Top"
            width="80"
          />
        </a>
      </td>
      <td className="text-start">
        <a href="product-layout1.html">Scarf Top</a>
        <div className="cart__meta-text">
          Color: Black
          <br />
          Size: Small
          <br />
        </div>
      </td>
      <td>$99.00</td>
      <td>1</td>
      <td className="fw-500">$99.00</td>
    </tr>
  );
}