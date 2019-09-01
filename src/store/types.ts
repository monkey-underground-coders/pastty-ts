import ActionTypes from "./actionTypes";
import { Paste } from "models/paste";

export interface Action {
  type: string;
  payload?: Record<string, any>;
}

export interface SessionState {
  token: string | undefined;
  isAuthenticating: boolean;
}

export interface EditorState {
  editorData: Paste;
}

export interface StoreRootState {
  session: SessionState;
  editor: EditorState;
}
