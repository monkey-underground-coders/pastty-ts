import { Dispatch } from "redux";
import ActionTypes from "../actionTypes";
import { getRequest } from "#/agent";
import { InternalModeOption } from "#/components/Editor/util";
import { StoreRootState } from "../types";

export const createPaste = () => (dispatch: Dispatch, getState: () => StoreRootState) => {
  const { editorData } = getState().editor;
  console.log(JSON.stringify(editorData.contents));
};

export const forkPaste = () => (dispatch: Dispatch, getState: () => StoreRootState) => {
  const { editorData } = getState().editor;
  console.log("gotta fork this shit: ", editorData);
};

export const changeMode = (mode: InternalModeOption) => (
  dispatch: Dispatch,
  getState: () => StoreRootState,
) => {
  dispatch({ type: ActionTypes.CHANGE_MODE, payload: mode });
};

export const setContents = (contents: string) => (
  dispatch: Dispatch,
  getState: () => StoreRootState,
) => {
  dispatch({ type: ActionTypes.EDITOR_CONTENT_CHANGE, payload: contents });
};

export const fetchPaste = (alias: string) => (
  dispatch: Dispatch,
  getState: () => StoreRootState,
) => {
  dispatch({ type: ActionTypes.FETCH_PASTE_START });
};
