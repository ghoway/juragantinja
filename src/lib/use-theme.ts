"use client";

import { use, useEffect, useState } from "react";
import { ThemeCtx } from "./providers";

export function useTheme() {
  const ctx = use(ThemeCtx);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return { ...ctx, mounted };
}
