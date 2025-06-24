import { createContext, useContext, useState } from "react";
import type { LoaderContextProps } from "./typing";

const LoaderContext = createContext<LoaderContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
