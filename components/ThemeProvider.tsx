'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class" // adds "class='dark'" to <html>
      defaultTheme="light"
      enableSystem={true} // respects user's OS theme
    >
      {children}
    </NextThemesProvider>
  );
}
