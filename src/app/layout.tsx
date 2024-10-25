import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import CustomHead from "@/components/custom-header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "DCA HQ",
  description:
    "Dollar Cost Average (DCA), the most proitable strategy to buy Stx, Btc, memecoins and Runes."
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CustomHead />
      <body
        className={` bg-custom-dark ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
