import { AuthDispatch, AuthState } from "interfaces/auth.interface"

const initialState: AuthState = {
  user: null
}

export default (state = initialState, { type, payload }:AuthDispatch) => {
  switch (type) {

  case 'SET_AUTH_STATE':
    return { ...state, ...payload }

  default:
    return state
  }
}
