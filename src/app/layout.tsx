import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NicheGenius',
  description: 'NicheGenius is an AI-powered platform that connects small businesses with niche experts and micro-SaaS tools to solve unique challenges. By leveraging the creator economy, it provides a curated marketplace for specialized services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
