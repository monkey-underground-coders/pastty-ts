import ActionTypes from "#/store/actionTypes";
import { EditorState, EditorModes } from "../types";
import { modes } from "#/scenes/Main/Editor/util";

const initialState: EditorState = {
  currentEditorMode: EditorModes.Editor,
  editorData: {
    contents: "",
    description: "",
    mode: modes.JavaScript,
    theme: "",
    views: undefined,
  },
  pasteData: null,

  pasteLoading: false,
  pasteLoadingHasErrors: false,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.RESET_EDITOR: {
      return initialState;
    }

    case ActionTypes.SET_EDITOR_MODE: {
      return { ...state, currentEditorMode: EditorModes.Editor };
    }

    case ActionTypes.SET_PASTE_MODE: {
      return { ...state, currentEditorMode: EditorModes.Paste };
    }

    case ActionTypes.CHANGE_MODE: {
      return { ...state, editorData: { ...state.editorData, mode: action.payload } };
    }

    case ActionTypes.EDITOR_CONTENT_CHANGE: {
      return { ...state, editorData: { ...state.editorData, contents: action.payload } };
    }

    case ActionTypes.CREATE_PASTE: {
      return { ...state };
    }

    case ActionTypes.FORK_PASTE: {
      return { ...state, pasteData: null, currentEditorMode: EditorModes.Editor };
    }

    case ActionTypes.FETCH_PASTE_START: {
      return { ...state, pasteLoading: true };
    }

    case ActionTypes.FETCH_PASTE_SUCCESS: {
      return {
        ...state,
        editorData: {
          ...state.editorData,
          contents: JSON.parse(action.payload.code),
          mode: modes[action.payload.dialect],
          description: "",
          views: undefined,
        },
        pasteData: action.payload,
        pasteLoading: false,
        pasteLoadingHasErrors: false,
        currentEditorMode: EditorModes.Paste,
      };
    }

    case ActionTypes.FETCH_PASTE_FAIL: {
      return { ...state, pasteLoading: false, pasteLoadingHasErrors: true };
    }

    default:
      return state;
  }
};
