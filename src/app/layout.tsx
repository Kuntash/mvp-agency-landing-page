import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Actualize UI - Web Agency",
  description:
    "Actualize UI is a web agency that helps turn passion filled ideas into beautiful Minimum Viable Products in weeks for a fixed price.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">

      
      <body
        className={cn(
          inter.className,
          "min-h-screen flex flex-col items-center"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
