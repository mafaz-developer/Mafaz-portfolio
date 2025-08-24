import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Mohammad Mafaz Ameenbeg - Flutter Developer",
  description: "Modern portfolio showcasing Flutter development expertise and innovative mobile solutions.",
  keywords: "Flutter Developer, Mobile App Development, Dart, iOS, Android, Cross-platform",
  authors: [{ name: "Mohammad Mafaz Ameenbeg" }],
  creator: "Mohammad Mafaz Ameenbeg",
  openGraph: {
    title: "Mohammad Mafaz Ameenbeg - Flutter Developer",
    description: "Modern portfolio showcasing Flutter development expertise and innovative mobile solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mafaz Ameenbeg - Flutter Developer",
    description: "Modern portfolio showcasing Flutter development expertise and innovative mobile solutions.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
