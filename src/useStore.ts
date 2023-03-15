import { useReducer } from "react";

export type Store = {
  isAuthenticated: boolean;
};

export type Action<T extends string, P = unknown> = {
  type: T;
  payload?: P;
};

const initialStore: Store = {
  isAuthenticated: false,
};

const reducer = (state: Store, action: Action<string>): Store => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "LOG_OUT":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const useStore = () => {
  return useReducer(reducer, initialStore);
};
