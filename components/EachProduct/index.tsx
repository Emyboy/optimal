import { Product } from "interfaces/product.interface";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
    size?: string;
    data: Product;
};

export function EachProduct({ size, data }: Props) {
    const { attributes } = data;
    console.log(attributes)
    const dispatch = useDispatch();
    const addToCart = () => {};

    return (
        <div
            className={`col-6 col-sm-6 col-md-4 col-lg-3 col-xl-${size} item pb-4`}
        >
            <div className="product-image">
                <Link href={`/product/tops/${attributes?.slug}`}>
                    <a className="product-img">
                        <img
                            className="primary blur-up lazyloaded"
                            data-src={attributes.image_urls[0]}
                            src={attributes.image_urls[0]}
                            alt="image"
                            title=""
                        />
                        <img
                            className="hover blur-up lazyloaded"
                            data-src={attributes.image_urls[0]}
                            src={attributes.image_urls[1]}
                            alt="image"
                            title=""
                        />
                    </a>
                </Link>
            </div>
            <div className="product-details text-center">
                <div className="product-name text-uppercase">
                    <Link href={`/product/tops/${attributes?.slug}`}>
                        <a>{attributes?.name}</a>
                    </Link>
                </div>
                <div className="product-price">
                    <span className="old-price">$199.00</span>
                    <span className="price">${attributes.price}</span>
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
