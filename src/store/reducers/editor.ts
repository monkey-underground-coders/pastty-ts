import ActionTypes from "#/store/actionTypes";
import { EditorState } from "../types";

const initialState: EditorState = {
  editorData: {
    contents: "",
    description: "",
    mode: "",
    theme: "",
    views: undefined,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_PASTE: {
      return { ...state };
    }

    case ActionTypes.FETCH_PASTE: {
      return { ...state };
    }

    case ActionTypes.FORK_PASTE: {
      return { ...state };
    }

    default:
      return state;
  }
};
