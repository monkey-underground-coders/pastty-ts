import { Paste } from "models/paste";

export interface Action {
  type: string;
  payload?: Record<string, any>;
}

export const FETCH_PASTE = "FETCH_PASTE";
export const fetchPaste = (alias: string) => ({
  type: FETCH_PASTE,
  payload: { alias }
});

export const CREATE_PASTE = "CREATE_PASTE";
export const createPaste = (pasteContent: Paste) => ({
  type: CREATE_PASTE,
  payload: { pasteContent }
});

export const FORK_PASTE = "FORK_PASTE";
export const forkPaste = (alias: string) => ({
  type: FORK_PASTE,
  payload: { alias }
});

interface FetchPasteAction extends Action {
  type: typeof FETCH_PASTE;
  payload: { alias: string };
}

interface CreatePasteAction extends Action {
  type: typeof CREATE_PASTE;
  payload: Paste;
}

interface ForkPasteAction extends Action {
  type: typeof FORK_PASTE;
  payload: Paste;
}

export type PasteActionTypes =
  | FetchPasteAction
  | CreatePasteAction
  | ForkPasteAction;

export interface IEditorState {
  editorData: Paste;
}
