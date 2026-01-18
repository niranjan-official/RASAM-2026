import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

const rothefight = localFont({
  src: "../public/fonts/ROTHEFIGHT.otf",
  variable: "--font-rothefight",
})

const ekster = localFont({
  src: "../public/fonts/Ekster.otf",
  variable: "--font-ekster",
})

const eksterThin = localFont({
  src: "../public/fonts/Ekster-Thin.otf",
  variable: "--font-ekster-thin",
})

export const metadata: Metadata = {
  title: "RASAM Season 7",
  description:
    "Celebrate love through art, music, dance, and fashion. Join RASAM, a Valentine-themed college cultural festival where hearts discover creativity.",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_poppins.className} ${rothefight.variable} ${ekster.variable} ${eksterThin.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
