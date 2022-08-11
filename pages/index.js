import * as React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../layouts/layout'
import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
    <div className='h-screen min-h-screen flex-col py-2'>
      <Header >
          <title>Next.JS Tailwind Boilerplate</title>
        </Header>
        
        <main>
          <div className='flex items-center justify-center'>
            <h1 className='text-3xl font-bold text-blue-600 flex items-center justify-center h-1/2 min-h-screen'>
              Yeah, this looks boring...The good stuff is in the</h1>
            <div className="flex items-center justify-center">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center">
                <Link href="https://github.com/justinTsugranes/boilerplate_next-tailwind">GitHub Repo</Link>
              </button>
            </div>
          </div>
        </main>

        <Footer />
        
      </div>
      </Layout>
  )
}