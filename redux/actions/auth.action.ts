import { AuthState } from "interfaces/auth.interface";
import { Dispatch } from "redux";

export const setAuthState = (payload: AuthState) => (dispatch: Dispatch) => {
    dispatch({
        type: "SET_AUTH_STATE",
        payload,
    });
};
