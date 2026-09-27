"use client";

import { useEffect } from "react";

export default function RevealGuard() {
  useEffect(() => {
    document.documentElement.classList.add("js-hydrated");
  }, []);

  return null;
}
