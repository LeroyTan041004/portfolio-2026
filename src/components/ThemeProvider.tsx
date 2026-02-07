"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// We use 'export function' (a Named Export) 
// so that { ThemeProvider } works in your layout file.
export function ThemeProvider({ 
  children, 
  ...props 
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}