import editor from "./reducers/editor";
import session from "./reducers/session";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ editor, session });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
