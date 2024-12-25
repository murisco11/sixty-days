import type { Metadata } from "next"
import "./globals.css"
import { UserContextProvider } from "./components/UserContext"

export const metadata: Metadata = {
  title: "Sexty Calen",
  description: "Sistema para organizar o seu desafio dos 60 dias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  )
}
