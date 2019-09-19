import { InternalModeOption } from "#/components/Editor/util";

export enum EditorModes {
  Paste = "Paste",
  Editor = "Editor",
}

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

export interface SessionState {
  token: string | undefined;
  isAuthenticating: boolean;
}

export interface EditorState {
  currentEditorMode: EditorModes;
  editorData: Paste;
}

export interface StoreRootState {
  session: SessionState;
  editor: EditorState;
}
