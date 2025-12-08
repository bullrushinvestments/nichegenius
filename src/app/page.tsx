import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NicheGenius',
  description: 'NicheGenius is an AI-powered platform that connects small businesses with niche experts and micro-SaaS tools to solve unique challenges. By leveraging the creator economy, it provides a curated marketplace for specialized services.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">NicheGenius</h1>
      <p className="mt-4 text-lg">NicheGenius is an AI-powered platform that connects small businesses with niche experts and micro-SaaS tools to solve unique challenges. By leveraging the creator economy, it provides a curated marketplace for specialized services.</p>
    </main>
  )
}
