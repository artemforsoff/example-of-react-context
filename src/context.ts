import { createContext } from "react";
import { useStore } from "./useStore";

export const StoreContext = createContext<ReturnType<typeof useStore> | null>(
  null
);
