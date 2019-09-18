import { Dispatch } from "redux";
import ActionTypes from "../actionTypes";
import { getRequest } from "#/agent";
import { InternalModeOption } from "#/components/Editor/util";
import { StoreRootState } from "../types";

export const changeMode = (mode: InternalModeOption) => (
  dispatch: Dispatch,
  getState: StoreRootState,
) => {
  dispatch({ type: ActionTypes.CHANGE_MODE, payload: mode });
};

export const fetchPaste = (alias: string) => (dispatch: Dispatch, getState: any) => {
  dispatch({ type: ActionTypes.FETCH_PASTE_START });
};
