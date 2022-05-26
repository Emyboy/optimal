import CartInfoForm from "@components/Cart/CartInfoForm";
import CartListTable from "@components/Cart/CartListTable";
import React from "react";

type Props = {};

export default function cart({}: Props) {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 main-col">
          <div
            className="alert alert-success py-2 rounded-1 alert-dismissible fade show cart-alert"
            role="alert"
          >
            <i className="align-middle icon an an-truck icon-large me-2"></i>
            <strong className="text-uppercase">Congratulations!</strong> Youve
            got free shipping!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>

          <form action="#" method="post" className="cart style2">
            <CartListTable />
          </form>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 cart__footer">
          <CartInfoForm />
        </div>
      </div>
    </div>
  );
}
