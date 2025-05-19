import { useState, type ReactNode } from "react";
import DataContext from "./context";

export type ContextWrapperProps = {
  children: ReactNode;
};

const ATSDataContext = ({ children }: ContextWrapperProps) => {
  const [data, setData] = useState<string>("//write your code here \n");
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ATSDataContext;
