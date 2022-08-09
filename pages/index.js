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
            
            <div className="p-6 max-w-sm mx-auto bg-white hover:bg-gray-100 rounded-xl shadow-lg flex items-center">
              <div className='min-h-fit flex items-center'>
                  <p className='text-xl font-medium text-black flex items-center'>
                    Here are some of the installed dependencies
                  </p>

                  <p className="text-md font-small text-slate-700 flex items-center justify-center">
                    <ul>
                      <li>Next.js</li>
                      <li>React.js</li>
                      <li>TailwindCSS</li>
                      <li>Jest</li>
                      <li>Node.js</li>
                      <li>Prettier Plugin</li>
                      <li>Heroicons</li>
                      <li>PostCSS Purge</li>
                      <li>ESLint</li>
                      <li>Typescript</li>
                    </ul>
                  </p>
              </div>
            </div>

          </div>
        </main>

        <Footer />
        
      </div>
      </Layout>
  )
}