import { CartDispatch, CartState } from "interfaces/cart.interface"

const initialState:CartState = {
    cart_items: []
}

export default (state = initialState, { type, payload }:CartDispatch) => {
  switch (type) {

  case 'SET_CART_STATE':
    return { ...state, ...payload }

  default:
    return state
  }
}
