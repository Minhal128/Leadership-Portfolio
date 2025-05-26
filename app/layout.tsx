import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leadership Portfolio',
  description: 'This is the leadership portfolio of Syed Abid Jaffery',
  generator: 'Minhal Rizvi',
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
