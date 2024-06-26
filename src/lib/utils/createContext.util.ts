import React from "react";

export const createContext = <T extends object>(): [React.Context<T | undefined>, () => T] => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = (): T => {
    const ctx = React.useContext(Context);
    if (!ctx) throw new Error(`us${Context.displayName} must be used within ${Context.displayName} scope!`)
      return ctx;
  }

  return [Context, useContext];
}