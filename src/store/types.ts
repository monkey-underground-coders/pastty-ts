import ActionTypes from "./actionTypes";
import { Paste } from "models/paste";

export interface Action {
  type: string;
  payload?: Record<string, any>;
}

export const fetchPaste = (alias: string) => ({
  type: ActionTypes.FETCH_PASTE,
  payload: { alias },
});

export const createPaste = (pasteContent: Paste) => ({
  type: ActionTypes.CREATE_PASTE,
  payload: { pasteContent },
});

export const forkPaste = (alias: string) => ({
  type: ActionTypes.FORK_PASTE,
  payload: { alias },
});

interface FetchPasteAction extends Action {
  type: typeof ActionTypes.FETCH_PASTE;
  payload: { alias: string };
}

interface CreatePasteAction extends Action {
  type: typeof ActionTypes.CREATE_PASTE;
  payload: Paste;
}

interface ForkPasteAction extends Action {
  type: typeof ActionTypes.FORK_PASTE;
  payload: Paste;
}

export type PasteActionTypes = FetchPasteAction | CreatePasteAction | ForkPasteAction;
