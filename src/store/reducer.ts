import editor from "../reducers/editor";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ editor });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
