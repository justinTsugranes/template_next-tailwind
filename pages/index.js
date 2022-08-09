import * as React from 'react'
import Footer from '../components/Footer';
import Layout from '../layouts/Layout'
import Header from '../components/Header';

export default function Index () {
  return (
    <Layout>
    <div className='h-screen min-h-screen flex-col py-2'>
      <Header >
          <title>NextJS Tailwind Template</title>
        </Header>
        
        <main>
          <div className='flex items-center justify-center'>

            <h1 className='text-4xl font-bold text-blue-600 flex items-center justify-center h-1/2 min-h-screen'>
              Hi! I'm Justin. Welcome to my Next.js Boilerplate.</h1>
            <p>clone, npm i, npm run dev, edit. simple.</p>
            
          </div>
        </main>

        <Footer />
        
      </div>
      </Layout>
  )
}