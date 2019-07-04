import {
  PasteActionTypes,
  IEditorState,
  CREATE_PASTE,
  FETCH_PASTE,
  FORK_PASTE
} from "../store/types";

const initialState: IEditorState = {
  editorData: {
    contents: "",
    description: "",
    mode: "",
    theme: "",
    views: undefined
  }
};

export default (
  state = initialState,
  action: PasteActionTypes
): IEditorState => {
  switch (action.type) {
    case CREATE_PASTE:
    case FETCH_PASTE:
    case FORK_PASTE:
    default:
      return state;
  }
};
