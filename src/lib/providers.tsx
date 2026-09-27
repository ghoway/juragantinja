"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeCtx = createContext({ dark: false, toggle() {} });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  /* Hydrate from <script> set class */
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  }

  return <ThemeCtx value={{ dark, toggle }}>{children}</ThemeCtx>;
}
