import { CREATE_PASTE, FETCH_PASTE, FORK_PASTE, Action } from "../store/types";
import { createReducer } from "store/helpers";
import { Paste } from "../models/paste";

export interface EditorState {
  editorData: Paste;
}

const editorInitialState: EditorState = {
  editorData: {
    contents: "",
    description: "",
    mode: "",
    theme: "",
    views: undefined
  }
};

export default createReducer(
  {
    [CREATE_PASTE]: (state: EditorState, action: Action) => state,
    [FETCH_PASTE]: (state: EditorState, action: Action) => state,
    [FORK_PASTE]: (state: EditorState, action: Action) => state
  },
  editorInitialState
);
