import { Action } from "../actions";
import { ActionType } from "../action-types";

const initialState = 0;

export const Bankreducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSTI:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
