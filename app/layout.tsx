import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leadership in Action - Syed Abid Hassan',
  description: 'Building youth leadership through education, mentorship and social action.',
  generator: 'Syed Abid Hassan',
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
