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
  title: "Mdmafaz - Software Developer",
  description:
    "Mohammad Mafaz Ameenbeg's personal portfolio website showcasing projects, skills, and experience as a Software Developer.",
  openGraph: {
    title: "Mohammad Mafaz Ameenbeg - Software Developer",
    description:
      "Mohammad Mafaz Ameenbeg's personal portfolio website showcasing projects, skills, and experience as a Software Developer.",
    url: "https://mafaz.dev",
    siteName: "Mohammad Mafaz Ameenbeg Portfolio",
    images: [
      {
        url: "https://mafaz.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Mafaz Ameenbeg Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mafaz Ameenbeg - Software Developer",
    description:
      "Mohammad Mafaz Ameenbeg's personal portfolio website showcasing projects, skills, and experience as a Software Developer.",
    images: ["https://mafaz.dev/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
      <link rel="icon" href="/mohammad-mafaz-profile.jpg" />
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
