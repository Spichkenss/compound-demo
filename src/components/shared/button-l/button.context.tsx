import React, { PropsWithChildren } from "react";
import { Utils } from "../../../lib/utils";

export interface IButtonContextValue {
  isLoading?: boolean;
}

const [ButtonContext, useButtonContext] = Utils.createContext<IButtonContextValue>();
ButtonContext.displayName = "ButtonContext";

interface IButtonContextProviderProps extends PropsWithChildren, IButtonContextValue {}

const ButtonContextProvider = React.memo(({children, isLoading}: IButtonContextProviderProps) => {

  return (
    <ButtonContext.Provider value={{isLoading}}>
      {children}
    </ButtonContext.Provider>
  )
});

export { ButtonContextProvider, useButtonContext };