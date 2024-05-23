import { createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const contexts = {};
  return (
    <GlobalContext.Provider value={contexts}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
