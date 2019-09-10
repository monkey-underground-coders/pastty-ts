export type EditorMode = string;

export interface Paste {
  contents: string;
  description: string;
  mode: string;
  theme: string;
  views?: number;
}

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
