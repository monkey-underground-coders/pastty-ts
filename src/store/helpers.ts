import { Action } from "./types";

export const createReducer = (
  components: any,
  initialState: Record<string, any>
) => (state: any = initialState, action: Action) =>
  components.hasOwnProperty(action.type)
    ? components[action.type](state, action)
    : state;
