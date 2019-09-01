import ActionTypes from "#/store/actionTypes";
import { SessionState } from "../types";

const initialState: SessionState = {
  token: undefined,
  isAuthenticating: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_START: {
      return { ...state, isAuthenticating: true };
    }

    case ActionTypes.LOGIN_SUCCESS: {
      const token = action.payload;
      return { ...state, token, isAuthenticating: false };
    }

    case ActionTypes.LOGIN_FAIL: {
      return { ...state, isAuthenticating: false };
    }

    default:
      return state;
  }
};
