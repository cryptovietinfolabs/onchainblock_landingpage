"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";

interface ScrollContextType {
  scrollRefs: Record<string, React.RefObject<HTMLDivElement>>;
  scrollTo: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

export const ScrollProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const scrollRefs: Record<string, React.RefObject<HTMLDivElement>> = {};
  const scrollTo = (section: string): void => {
    if (scrollRefs[section]?.current) {
      scrollRefs[section].current!.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollRefs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
