import React from "react";

type Props = {
    show?: boolean;
    onClose: () => void;
};

export default function CartPopup({ show, onClose }: Props) {
    if(!show){
        return null;
    }
    return (
        <>
            <div
                className={`minicart-right-drawer modal right fade show`}
                id="minicart-drawer"
                style={{ paddingRight: "17px", display: "block" }}
                aria-modal="true"
                role="dialog"
            >
                {show && (
                    <div
                        // className="bg-danger modalOverly show"
                        onClick={() => onClose()}
                        style={{
                            position: "absolute",
                            zIndex: 99,
                            height: "100%",
                            width: "100vw",
                            backgroundColor: "#19153273",
                        }}
                    ></div>
                )}
                <div className="modal-dialog">
                    <div className="modal-content shadow-lg">
                        <div id="cart-drawer" className="block block-cart">
                            <div className="minicart-header">
                                <a
                                    className="close-cart"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={() => onClose()}
                                >
                                    <i
                                        className="an an-times-r"
                                        aria-hidden="true"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="left"
                                        title=""
                                        data-bs-original-title="Close"
                                        aria-label="Close"
                                    ></i>
                                </a>
                                <h4 className="fs-6 text-black">
                                    Your cart (2 Items)
                                </h4>
                            </div>
                            <div className="minicart-content">
                                <ul className="clearfix">
                                    <li className="item d-flex justify-content-center align-items-center">
                                        <a
                                            className="product-image"
                                            href="product-layout1.html"
                                        >
                                            <img
                                                className="blur-up lazyloaded"
                                                src="assets/images/products/cart-product-img1.jpg"
                                                data-src="assets/images/products/cart-product-img1.jpg"
                                                alt="image"
                                                title=""
                                            />
                                        </a>
                                        <div className="product-details">
                                            <a
                                                className="product-title"
                                                href="product-layout1.html"
                                            >
                                                Floral Crop Top
                                            </a>
                                            <div className="variant-cart mb-1">
                                                Black / XL
                                            </div>
                                            <div className="priceRow">
                                                <div className="product-price">
                                                    <span className="money">
                                                        $59.00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="qtyDetail text-center">
                                            <div className="wrapQtyBtn">
                                                <div className="qtyField">
                                                    <a
                                                        className="qtyBtn minus"
                                                    >
                                                        <i
                                                            className="icon an an-minus-r"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        value="1"
                                                        className="qty rounded-0"
                                                    />
                                                    <a
                                                        className="qtyBtn plus"
                                                    >
                                                        <i
                                                            className="icon an an-plus-l"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className="edit-i remove"
                                            >
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
                                    <li className="item d-flex justify-content-center align-items-center">
                                        <a
                                            className="product-image"
                                            href="product-layout1.html"
                                        >
                                            <img
                                                className="blur-up lazyloaded"
                                                src="assets/images/products/cart-product-img2.jpg"
                                                data-src="assets/images/products/cart-product-img2.jpg"
                                                alt="image"
                                                title=""
                                            />
                                        </a>
                                        <div className="product-details">
                                            <a
                                                className="product-title"
                                                href="product-layout1.html"
                                            >
                                                V Neck T-shirts
                                            </a>
                                            <div className="variant-cart mb-1">
                                                Blue / XL
                                            </div>
                                            <div className="priceRow">
                                                <div className="product-price">
                                                    <span className="money">
                                                        $199.00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="qtyDetail text-center">
                                            <div className="wrapQtyBtn">
                                                <div className="qtyField">
                                                    <a
                                                        className="qtyBtn minus"
                                                    >
                                                        <i
                                                            className="icon an an-minus-r"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        value="1"
                                                        className="qty rounded-0"
                                                    />
                                                    <a
                                                        className="qtyBtn plus"
                                                    >
                                                        <i
                                                            className="icon an an-plus-l"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className="edit-i remove"
                                            >
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
                                </ul>
                            </div>
                            <div className="minicart-bottom text-black">
                                <div className="shipinfo text-center mb-3 text-uppercase">
                                    <p className="freeShipMsg">
                                        <i className="an an-truck fs-5 me-2 align-middle"></i>
                                        SPENT <b>$199.00</b> MORE FOR FREE
                                        SHIPPING
                                    </p>
                                </div>
                                <div className="subtotal">
                                    <span>Total:</span>
                                    <span className="product-price">
                                        $93.13
                                    </span>
                                </div>
                                <a
                                    href="checkout-style2.html"
                                    className="w-100 p-2 my-2 btn btn-secondary proceed-to-checkout"
                                >
                                    Proceed to Checkout
                                </a>
                                <a
                                    href="cart-style2.html"
                                    className="w-100 btn btn-outline-primary cart-btn"
                                >
                                    View Cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
