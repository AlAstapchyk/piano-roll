"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch } from "./hooks";
function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (<Provider store={store}>{children}</Provider>);
}

export default ReduxProvider;