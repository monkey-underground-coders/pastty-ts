import { Dispatch } from "redux";
import ActionTypes from "../actionTypes";
import { getRequest } from "#/agent";

export const fetchPaste = (alias: string) => (dispatch: Dispatch, getState: any) => {
  dispatch({ type: ActionTypes.FETCH_PASTE_START });
  return getRequest();
};
