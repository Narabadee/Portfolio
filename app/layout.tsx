import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Narabadee Yapolha | Full Stack Developer',
  description: 'Full Stack Developer specializing in React, TypeScript, Python, and Node.js. Building innovative software solutions that solve real-world problems.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Portfolio/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Portfolio/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Portfolio/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Portfolio/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
