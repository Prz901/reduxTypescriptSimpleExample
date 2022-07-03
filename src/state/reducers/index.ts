import { combineReducers } from "redux";
import { Bankreducer } from "./bankReducer";

export const reducers = combineReducers({
  bank: Bankreducer,
});

export type State = ReturnType<typeof reducers>;
