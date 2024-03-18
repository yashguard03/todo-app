"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

const Providers = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
    console.log(storeRef.current);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default Providers;
