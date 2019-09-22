import { InternalModeOption } from "#/components/Editor/util";

// Control application modes
export enum EditorModes {
  Paste = "Paste",
  Editor = "Editor",
}

// Some short bindings for React Events
export type ReactSelectEvent = React.ChangeEvent<HTMLSelectElement>;
export type ReactButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type EditorMode = string;

export interface Paste {
  contents: string;
  description: string;
  mode: InternalModeOption;
  theme: string;
  views?: number;
}

export interface Action {
  type: string;
  payload?: Record<string, any>;
}

/////////////////////////
//// Reducer states
/////////////////////////

// Reducer Root state
export interface StoreRootState {
  session: SessionState;
  editor: EditorState;
}

export interface SessionState {
  token: string | undefined;
  isAuthenticating: boolean;
}

export interface EditorState {
  currentEditorMode: EditorModes;
  editorData: Paste;
}
