import { useContext } from "react";
import { StoreContext } from "./context";

export const A = () => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    return null;
  }

  const [store, dispatch] = storeContext;

  return (
    <div className="A">
      <p>Authenticated: {String(store.isAuthenticated)}</p>
      <button onClick={() => dispatch({ type: "AUTH" })}>Auth</button>
      <button onClick={() => dispatch({ type: "LOG_OUT" })}>Log out</button>
    </div>
  );
};
