import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "BigKain | Litecoin Network",
  description: "A precise, live view into the Litecoin network.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
