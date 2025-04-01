import { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {title && <title>{title} | fiNder</title>}
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} fiNder. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}