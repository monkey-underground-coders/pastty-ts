import { Dispatch } from "redux";
import ActionTypes from "../actionTypes";
import { getRequest, postRequest } from "#/agent";
import { InternalModeOption } from "#/scenes/Main/Editor/util";
import { StoreRootState } from "../types";
import { apiRoutes } from "#/routes/api";

export const createPaste = () => (dispatch: Dispatch, getState: () => StoreRootState) => {
  const { editorData } = getState().editor;

  if (editorData.contents) {
    const payload = {
      code: JSON.stringify(editorData.contents),
      dialect: editorData.mode.value,
      title: "default",
      visible: true,
    };
    return postRequest(apiRoutes.uploadScript, payload)
      .then((json: any) => {
        console.log(json);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
};

export const forkPaste = () => (dispatch: Dispatch, getState: () => StoreRootState) => {
  const { editorData } = getState().editor;

  return new Promise((resolve, reject) => {
    dispatch({ type: ActionTypes.FORK_PASTE });
    return resolve();
  });
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
  return getRequest(apiRoutes.fetchScript(alias))
    .then((json: any) => {
      dispatch({ type: ActionTypes.FETCH_PASTE_SUCCESS, payload: json });
    })
    .catch((err: any) => {
      dispatch({ type: ActionTypes.FETCH_PASTE_FAIL });
    });
};
