import { useStore } from "./useStore";
import { A } from "./A";
import { B } from "./B";
import { StoreContext } from "./context";

export const App = () => {
  const [store, dispatch] = useStore();

  return (
    <StoreContext.Provider value={[store, dispatch]}>
      <A />
      <B />
    </StoreContext.Provider>
  );
};
