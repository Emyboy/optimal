import React from "react";
import EachCartItemLG from "./EachCartItemLG";

type Props = {};

export default function CartListTable({}: Props) {
  return (
    <table className="align-middle">
      <thead className="cart__row cart__header small--hide">
        <tr>
          <th className="action">&nbsp;</th>
          <th colSpan={2} className="text-start">
            Product
          </th>
          <th className="text-center">Price</th>
          <th className="text-center">Quantity</th>
          <th className="text-center">Total</th>
        </tr>
      </thead>
      <tbody>
        <EachCartItemLG />
        <EachCartItemLG />
        <EachCartItemLG />
        <EachCartItemLG />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} className="text-start pt-3">
            <a
              href="#"
              className="btn btn--link d-inline-flex align-items-center btn--small p-0 cart-continue"
            >
              <i className="me-1 icon an an-angle-left-l"></i>
              <span className="text-decoration-underline">
                Continue shopping
              </span>
            </a>
          </td>
          <td colSpan={3} className="text-end pt-3">
            <button
              type="submit"
              name="clear"
              className="btn btn--link d-inline-flex align-items-center btn--small small--hide"
            >
              <i className="me-1 icon an an-times-r"></i>
              <span className="ms-1 text-decoration-underline">
                Clear Shoping Cart
              </span>
            </button>
            <button
              type="submit"
              name="update"
              className="btn btn--small d-inline-flex align-items-center rounded cart-continue ml-2"
            >
              <i className="me-1 icon an an-sync-ar d-none"></i>Update Cart
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
