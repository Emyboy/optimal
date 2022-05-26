import Link from "next/link";
import React from "react";

type Props = {
    size?: string;
};

export function EachProduct({ size }: Props) {
    return (
      <div className={`col-6 col-sm-6 col-md-4 col-lg-3 col-xl-${size} item pb-4`}>
        <div className="product-image">
          <Link href={`/product/tops/343436656`}>
            <a className="product-img">
              <img
                className="primary blur-up lazyloaded"
                data-src="/assets/images/products/product-1.jpg"
                src="/assets/images/products/product-1.jpg"
                alt="image"
                title=""
              />
              <img
                className="hover blur-up lazyloaded"
                data-src="/assets/images/products/product-1-1.jpg"
                src="/assets/images/products/product-1-1.jpg"
                alt="image"
                title=""
              />
            </a>
          </Link>
        </div>
        <div className="product-details text-center">
          <div className="product-name text-uppercase">
            <Link href={`/product/tops/343436656`}>
              <a>Floral Crop Top</a>
            </Link>
          </div>
          <div className="product-price">
            <span className="old-price">$199.00</span>
            <span className="price">$219.00</span>
          </div>
          <ul className="swatches">
            <li className="swatch medium radius black">
              <span className="tooltip-label">black</span>
            </li>
            <li className="swatch medium radius navy">
              <span className="tooltip-label">navy</span>
            </li>
            <li className="swatch medium radius darkgreen">
              <span className="tooltip-label">darkgreen</span>
            </li>
          </ul>

          <div className="image-swatches swatches">
            <button
              type="submit"
              name="add"
              className="btn rounded-0 btn-outline-primary product-form__cart-submit"
            >
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    );
}
