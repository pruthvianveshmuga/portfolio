"use client";

import { createContext, useContext, useRef, ReactNode } from "react";

interface SectionRefs {
  about: React.RefObject<HTMLElement>;
  work: React.RefObject<HTMLElement>;
  education: React.RefObject<HTMLElement>;
  tech: React.RefObject<HTMLElement>;
}

const SectionContext = createContext<SectionRefs | null>(null);

export function SectionProvider({ children }: { children: ReactNode }) {
  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    work: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    tech: useRef<HTMLElement>(null),
  };

  return (
    <SectionContext.Provider value={sectionRefs}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionRefs() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionRefs must be used within a SectionProvider");
  }
  return context;
}
