"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

export type SectionName = (typeof links)[number]["name"];

type ActiveSecContextType = {
  activeSec: SectionName;
  setActiveSec: React.Dispatch<React.SetStateAction<SectionName>>;
  timeofLastClick: number;
  setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSecContext = createContext<ActiveSecContextType | null>(
  null
);

const ActiveSecContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSec, setActiveSec] = useState<SectionName>("Home");
  const [timeofLastClick, setTimeofLastClick] = useState(0);

  return (
    <ActiveSecContext.Provider
      value={{
        activeSec,
        setActiveSec,
        timeofLastClick,
        setTimeofLastClick,
      }}
    >
      {children}
    </ActiveSecContext.Provider>
  );
};

export default ActiveSecContextProvider;

export function useActiveSec() {
  const context = useContext(ActiveSecContext);
  if (context === null) {
    throw new Error(
      "useActiveSec must be used within a ActiveSecContextProvider"
    );
  }
  return context;
}
