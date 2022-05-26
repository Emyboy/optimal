import Link from "next/link";
import React from "react";
import EachCartItemSM from "./EachCartItemSM";

type Props = {
  show?: boolean;
  onClose: () => void;
};

export default function CartPopup({ show, onClose }: Props) {
  if (!show) {
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
                <h4 className="fs-6 text-black">Your cart (2 Items)</h4>
              </div>
              <div className="minicart-content">
                <ul className="clearfix">
                  <EachCartItemSM />
                  <EachCartItemSM />
                  <EachCartItemSM />
                  <EachCartItemSM />
                  <EachCartItemSM />
                </ul>
              </div>
              <div className="minicart-bottom text-black">
                <div className="shipinfo text-center mb-3 text-uppercase">
                  <p className="freeShipMsg">
                    <i className="an an-truck fs-5 me-2 align-middle"></i>
                    SPENT <b>$199.00</b> MORE FOR FREE SHIPPING
                  </p>
                </div>
                <div className="subtotal">
                  <span>Total:</span>
                  <span className="product-price">$93.13</span>
                </div>
                <Link href={"/checkout"}>
                  <a
                    onClick={onClose}
                    className="w-100 p-2 my-2 btn btn-secondary proceed-to-checkout"
                  >
                    Proceed to Checkout
                  </a>
                </Link>
                <Link href={"/cart"}>
                  <a
                    onClick={onClose}
                    className="w-100 btn btn-outline-primary cart-btn"
                  >
                    View Cart
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
