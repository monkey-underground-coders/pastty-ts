import ActionTypes from "#/store/actionTypes";
import { EditorState } from "../types";
import { modes } from "#/components/Editor/util";

const initialState: EditorState = {
  editorData: {
    contents: "",
    description: "",
    mode: modes["java"],
    theme: "",
    views: undefined,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_MODE: {
      return { ...state, editorData: { ...state.editorData, mode: action.payload } };
    }

    case ActionTypes.CREATE_PASTE: {
      return { ...state };
    }

    case ActionTypes.FORK_PASTE: {
      return { ...state };
    }

    default:
      return state;
  }
};
