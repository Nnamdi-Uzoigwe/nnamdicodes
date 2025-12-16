// // 'use client'

// // import { ThemeProvider as NextThemesProvider } from 'next-themes'
// // import type { ComponentProps } from 'react'

// // export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
// //   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// // }


// 'use client'

// import { ThemeProvider as NextThemesProvider } from 'next-themes'

// export function ThemeProvider({ 
//   children, 
//   ...props 
// }: React.ComponentProps<typeof NextThemesProvider>) {
//   return (
//     <NextThemesProvider 
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       storageKey="theme"
//       {...props}
//     >
//       {children}
//     </NextThemesProvider>
//   )
// }



// components/ThemeProvider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}