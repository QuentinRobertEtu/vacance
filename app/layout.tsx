import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vacances !!!',
  description: 'Compteur des derniers jours',
  generator: 'Funky dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
